// NARROWING ////////////////////////////////////////////////////////////////////////////

// Type Guard - a conditional statement checking for type
// TypeScript will look for type guards when running operations on union types

function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return (" ".repeat(padding) + input);
  }

  return padding + input;
}

console.log(padLeft(5, 'hi'));

console.log(padLeft('So-and-so says ', 'hi'));

////////////////////////////////////////////////////////////////////////////////////////
// typeof null returns object
// typeof null ==> 'object'

// When doing a typeof check for 'object' typescript knows that it could be null
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === 'object') {
//     strs.forEach((s) => console.log(s));
//   }
// }

const greeting = 'hello';

// bool1 has type 'boolean'
const bool1 = Boolean(greeting);

// bool2 has type true
const bool2 = !!greeting;

/////////////////////////////////////////////////////////////////////////////////////////
// Assessing variable's truthiness is used to type guard against null and undefined
function printAll2(strs: string | string[] | null) {
  // first check truthiness of strs - if null it will short circuit
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////
// =! type guards against null and undefined
function multipleValue(input: string | null | undefined) {
  if (input != null) {
    return input.length;
  }

  return 0;
}

