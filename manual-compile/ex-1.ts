export {};
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}`);
// }

// Ts compile errors normally don't stop from generating a
// Js file
// greet("Sue");

// NOTE: We can run compiler with "noEmitOnError" flag
// this will not generate a js file on error
// $ tsc --noEmitOnError ex-1.ts

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

// Will throw an error - Date() returns a 'string'
// greet('Stu', Date());

// new Date() will return a type 'date'
greet('Stu', new Date());

// NOTE: compiling TypeScript will convert to ES3 by default
// NOTE: We can pass a flag to set the target ES version
// $ tsc --target es2015 ex-1.ts

