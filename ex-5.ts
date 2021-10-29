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


