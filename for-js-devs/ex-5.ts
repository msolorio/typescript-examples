export {};

type WindowStates = 'open' | 'closed' | 'minimized';

let windowState: WindowStates = 'open';

windowState = 'closed';

// Type '"half-open"' is not assignable to type 'WindowStates'.
// windowState = 'half-open';

// Unions can be used to specify a variable can be 1 of many types

// A function can take an input that is a string or an array
function getLength(input: string | string[]): number {
  return input.length;
}

getLength('abc');

getLength(['a', 'b', 'c']);

// Argument of type 'number' is not assignable to parameter
// of type 'string | string[]'
// getLength(123);

///////////////////////////////////////////////////////////////////
// Using union to account for multiple input types
function wrapInArray(input: string | string[]) {
  if (typeof input === 'string') {
    return [input];
  }

  return input;
}

let myArray: Array<number>;

// Array of objects with a name property
let personsArray: Array<{ name: string }>

// Generics provide variables to types
type StringArray = Array<string>;
// type StringArray = string[];

function printArray(input: StringArray) {
  input.forEach(item => console.log(item));
}

printArray(['a', 'b', 'c']);

type NumberArray = Array<number>;

// An array of objects, each with a name and age
type People = Array<{name: string, age: number}>

///////////////////////////////////////////////////////////
interface Backpack<Type> {
  add: (item: Type) => void;
  get: () => Type;
}

// tells TypeScript a const called backpack exists.
// backpack still does not exist in JS
declare const backpack: Backpack<string>;

// Won't work in JS because backpack doesn't exist
// const myItem = backpack.get();

// Will not compile in TypeScript because .add() takes a string
// passed from generic
// backpack.add(23);

