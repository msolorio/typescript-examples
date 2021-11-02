export {};

console.log('this is a test');

/////////////////////////////////////////////////////////////////////
// noImplicitAny

// Will allow us to create a var with type 'any' here
let someVar;
someVar = 'some string';

// will not allow us to pass a param with implicit type 'any'
// function myFunc(param) {
//   return param;
// }

// params to function definitions must have defined types
function myFunc(param: string) {
  return param;
}

/////////////////////////////////////////////////////////////////////
// strictNullChecks
let loggedInUsername = 'codecrusher789';

const users = [
  { name: 'Oby', age: 12 },
  { name: 'Heera', age: 32 }
];

// When strictNullChecks is true
// .find will return type 'a | undefined
const loggedInUser = users.find((user) => user.name === loggedInUsername);

// TypeScript will let us know that loggedInUser is possibly undefined
// will throw an error
// console.log(loggedInUser.age);

// Can be handled by optional chaining
// Will only try to access age if loggedInUser is an object
console.log(loggedInUser?.age);

