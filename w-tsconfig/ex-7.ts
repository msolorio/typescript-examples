export {};
///////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS

// FUNCTION TYPE EXPRESSIONS
// greeter takes a parameter fn.
// fn has type (a: string) => void
function greeter(fn: (a: string) => void) {
  fn('Hello world');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);


////////////////////////////////////////////////////////////////////////////////////////

type logFunc = (a: string) => void;

function greeter2(fn: logFunc) {
  fn('Hello world');
}

greeter2(printToConsole);

////////////////////////////////////////////////////////////////////////////////////////

const greet1: logFunc = function(a: string) {
  console.log(`Hello ${a}`);
};

////////////////////////////////////////////////////////////////////////////////////////

type DescribableFunc = {
  description: string,
  (input: number): boolean
}

function doSomething(fn: DescribableFunc) {
  console.log(`${fn.description} - Returned => ${fn(6)}`);
}

function isEven(input: number) {
  return input % 2 === 0;
}

isEven.description = 'Returns true or false indicating of it is even.';

doSomething(isEven);

///////////////////////////////////////////////////////////////////////////////
// GENERIC FUNCTIONS
// Generic creates a variable to be used in the type declaration

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const firstEl = firstElement([1, 2, 3, 4]);

console.log('firstEl ==>', firstEl);

///////////////////////////////////////////////////////////////////////////////
function customMap<Input, Output>(arr: Input[], callback: (arg: Input) => Output): Output[] {
  return arr.map(callback);
}

customMap(['1', '2', '3'], (s) => parseInt(s));

////////////////////////////////////////////////////////////////////////////////
function getLongest<Type extends { length: number }>(a: Type, b: Type) {
  return a.length > b.length ? a : b;
}

const longest = getLongest('apple', 'banana');
console.log('longest ==>', longest);

const longest2 = getLongest([1, 2, 3], [7,8]);
console.log('longest2 ==>', longest2);

// ERROR:
// type number does not have a length property
// const longest3 = getLongest(23, 1);

////////////////////////////////////////////////////////////////////////////////
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

combine([1,2,3], [7,8,9]);

// ERROR:
// Type string is not assignable to type number
// combine([1,2,3], ['7','8','9']);

// ERROR:
// Type number is not assignable to type string
// combine(['7','8','9'], [1,2,3]);

////////////////////////////////////////////////////////////////////////////////
// If we want to combine types
// can specify the input type to the function call
combine<string | number>([1,2,3], ['7','8','9']);

///////////////////////////////////////////////////////////////////////////////
// 2 WAYS OF WRITING A FUNCTION

// preferred - labels arr as a Type[] depending on what is passed in
function getFirst1<Type>(arr: Type[]) {
  return arr[0];
}

// not preferred - labels arr as an 'any' list
// return type is 'any'
function getFirst2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// Is of type 'number' -> better
const first1 = getFirst1([1,2,3]);

// Is of type 'any' -> not idea
const first2 = getFirst2([1,2,3]);

/////////////////////////////////////////////////////////////////////////////
// NOTE: USE AS FEW TYPE PARAMETERS AS POSSIBLE
// SOMETIMES FUNCTIONS MAY NOT NEED TO USE GENERICS
// GENERICS ARE USED TO RELATE 2 VALUES

// GENERICS NOT NEEDED HERE
function greet<Str extends string>(s: Str) {
  console.log(`Hello, ${s}`);
}

greet('Jim');

////////////////////////////////////////////////////////////////////////////
// OPTIONAL PARAMETERS

// x is optional - type 'number | undefined'
function f(x?: number) {
  if (x) {
    return 'Hello '.repeat(x);
  }

  return 'Hello';
}


/////////////////////////////////////////////////////////////////////////////
// CAN STILL PROVIDE A DEFAULT - THEN IT CANNOT BE OPTIONAL
// x WILL ALWAYS HAVE TYPE NUMBER
function myFunc(x: number = 10) {
  console.log(x);
}

/////////////////////////////////////////////////////////////////////////////
// FUNCTION OVERLOAD SIGNATURES
// SPECIFY A FUNCTION THAT CAN BE CALLED IN DIFFERENT WAYS

// - a function with 2 overload signaitures
// - the final signiture is the implementation signiture
// - The implementation sig cannot be seen from outside
// - The implementation sig must be compatible with overload sigs

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d != undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  }
  
  return new Date(mOrTimestamp);
}


/////////////////////////////////////////////////////////////////////////////
// NOTE: PREFER FUNCTIONS PARAMETERS W/UNION TYPES RATHER THAN OVERLOAD SIGNAITURES

/////////////////////////////////////////////////////////////////////////////
// VOID RETURN TYPE

function noop() {
  return;
}

// nothing: void
const nothing = noop();

////////////////////////////////////////////////////////////////////////////
// VOID AND UNDEFINED ARE NOT THE SAME THING
// A function that has a type signature of => void allows the function to
// return a value in some cases
type voidFunc = () => void;

const noop2: voidFunc = function () {
  return 5;
}

// returnVal has type 'void'
const returnVal = noop2();

///////////////////////////////////////////////////////////////////////////
// - This is so when a function incidentally returns a value it will not break
// - For example the callback for the .forEach() method should not return a value
// however .push() will return a value, even if it is not used.
const src = [1, 2, 3];
const dist = [];

src.forEach((el) => dist.push(el));

//////////////////////////////////////////////////////////////////////////
// When a literal function definition has a void return type
// it must return undefined

// ERROR:
// 'number' is not assignable to type 'void'
// function f2(): void {
//   return 5;
// }

/////////////////////////////////////////////////////////////////////////
// 'UNKNOWN' TYPE - REPRESENTS ANY VALUE
// - SIMILAR TO THE 'ANY' TYPE HOWEVER NOT ABLE TO DO ANYTHING WITH AN
// 'UNKNOWN' VALUE

function f3(a: any) {
  a.b(); // OK
}

//ERROR:
// function f4(a: unknown) {
//   a.b();
//   a.toString();
// }

/////////////////////////////////////////////////////////////////////////
// 'NEVER' TYPE - REPRESENTS VALUES THAT ARE NEVER OBSERVED

// A FUNCTION THAT THROWS AN ERROR RETURNS A 'NEVER' TYPE
function fail(msg: string): never {
  throw new Error(msg);
}

// USED TO DESCRIBE WHEN TYPES IN A UNION ARE EXHAUSTED
function fn(x: string | number) {
  if (typeof x === 'string') {
    //
  } else if (typeof x === 'number') {
    //
  } else {
    x; // has type 'never'
  }
}