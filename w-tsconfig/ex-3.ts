// UNION TYPES //////////////////////////////////////////////

// When using union types, operations on that type must
// work for every member of the union
// This will error
// function printId(id: number | string) {
//   const allCaps = id.toUpperCase();
// }

// Use conditional logic instead
function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {

  if (Array.isArray(x)) {
    const greeting = `Hello, ${ x.join(' and ') }`
    return greeting;
  }

  return `Hello lone traveler ${x}`;
}

console.log(welcomePeople(['Jen', 'Sam', 'Lew']));

console.log(welcomePeople('Frank'));

/////////////////////////////////////////////////////////
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

/////////////////////////////////////////////////////////
// TYPE ALIASES - a name for a type

// Type aliases can be used for object types
type Point = {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log(`x => ${pt.x}. y => ${pt.y}`);
}

// Type aliases can be used for union types
type ID = number | string;

/////////////////////////////////////////////////////////

// Interface - another way to name an object type

// - PREFER INTERFACES OVER TYPES
// - interface is extendable
// - type cannot be re-opened to name new properties

interface Point1 {
  x: number;
  y: number;
}

const newPoint: Point1 = {
  x: 0,
  y: 5
}

/////////////////////////////////////////////////////////
// Extending an interface
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

/////////////////////////////////////////////////////////
type Animal2 = {
  name: string
}

type Bear2 = Animal2 & {
  honey: boolean
}

// extending interfaces and types is interchangeable
interface Bear3 extends Animal2 {
}

interface Breakfast {
  time: Date
}

interface Breakfast {
  mainCourse: string
}

// Requires both properties - time and mainCourse
const breakfast1: Breakfast = {
  time: new Date(),
  mainCourse: 'camote'
};

//////////////////////////////////////////////////////////////////////
// TYPE ASSERTION

const myString = <string>(5).toString();

const myString2 = (5).toString() as string;

//////////////////////////////////////////////////////////////////////
// LITERAL TYPES
// declaring a variable with const has a literal type that cannot be changed
const myString3 = 'this string';

let x: 'hello' = 'hello';

// This will error - type 'greetings' is not assignable to type 'hello'
// x = 'greetings';

// Combining literal types with union types
let y: 'left' | 'right' | 'up' | 'down' = 'right';

// light must be one of 3 literal types
function carAction(light: 'red' | 'yellow' | 'green') {
  // 
}

// We can combine literal types with non-literal types
function printFavNum(color: number | 'none selected') {
  // 
}

//////////////////////////////////////////////////////////////////////
// LITERAL INTERFACES
const obj1 = {
  counter: 0
}

// TypeScript does not error when reassigning the type
obj.counter = 'new value';

// obj.counter = 1;
//////////////////////////////////////////////////////////////////////

const obj3 = {
  direction: 'Left'
}

function handleAction(dir: 'Left' | 'Right') {
  // some conditional code depending on dir
}

// Argument of type string is not assignable to parameter
// of type 'Left' | 'Right'
// - TypeScript knows obj3.direction could be changed after declaration
// doesn't assume it is 'Left' | 'Right'
// handleAction(obj3.direction);

// Solution 1 /////////////////////////////////////////////////////////
const obj4 = {
  direction: 'Left' as 'Left' // explicitly declaring type
}

handleAction(obj4.direction);

// Solution 2 /////////////////////////////////////////////////////////
// Ensures all object's properties are given literal types
const obj5 = {
  direction: 'Left'
} as const;

// Solution 3 ////////////////////////////////////////////////////////
// Create a type for 'Left' | 'Right'
type dirType = 'Left' | 'Right';

let myDir: dirType = 'Left';

const obj6 = {
  direction: myDir
}

handleAction(obj6.direction);

