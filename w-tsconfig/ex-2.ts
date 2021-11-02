let obj: any = { x: 0 };

// Ts will not give an error
// Js will
// obj.foo();
// obj();

// Ts will not error bc obj has type any
obj.bar = 100;


let obj2 = {
  x: 0,
  y: 0
};

// Ts will error here
// obj2's type is set on declaration
// bc it is not given type any
// obj2.bar = 100;

/////////////////////////////////////////////////////////////
// Contextual typing
// the context the function occurred within informs what type it should have
const names = ['Sue', 'Uri', 'Victor'];

// TypeScript knows n is a 'string' and does not have a .splice() method
// will give an error
// names.forEach((n) => {
//   n.splice();
// });

/////////////////////////////////////////////////////////////
// OPTIONAL Parameters
function printName(obj: { first: string, last?: string }) {
  console.log(`Hello ${obj.first} ${obj.last}`);
}

printName({first: 'Jim'});
printName({first: 'Jim', last: 'Jones'});

function printName2(first: string, last?: string) {
  console.log(`Hello ${first} ${last || ''}`);
}

printName2('Uri', 'Foo');
printName2('Dan');

