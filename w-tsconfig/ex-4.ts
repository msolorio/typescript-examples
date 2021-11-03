export {};
/////////////////////////////////////////////////////////////////////////////////////
// NULL AND UNDEFINED

// With strictNullChecks: false
// - Values null and undefined can be assigned to properties / variables of any type
// - this is how languages w/o null checks behave, like C#, Java
// - Can be major source of bugs

// With strictNullChecks: true
// - Cannot assign null or undefined to a property unless it is part of its type
let myString: string = 'my string';

// type 'null' is not assignable to type 'string'
// myString = null;

// - Forces programmer to check type of value before using methods / properties on value
// function getNameLength(name: string | undefined) {
  // This will error - possible 'undefined'
  // return name.length;
// }

function getNameLength(name?: string | undefined) {
  if (typeof name === 'string') {
    return name.length;
  }

  return 0;
}

console.log(getNameLength());

console.log(getNameLength('Franklin'));

//////////////////////////////////////////////////////////////////////////////
// Non-null Assertion Operator
function liveDangerously(x?: number | null) {

  // asserts that x is not 'null' or 'undefined'
  console.log(x!.toFixed());
}

///////////////////////////////////////////////////////////////////////////////////
// Primitive in JS to create a globally unique reference with Symbol() constructor

const sym1 = Symbol('name');
const sym2 = Symbol('name');

// sym1 === sym2 will always return false because they are globally unique references
// const areEqual = sym1 === sym2;

console.log(sym1);

const sym3 = Symbol();
const sym4 = Symbol();

console.log(sym3);

// This will still return false
// sym3 === sym4;

