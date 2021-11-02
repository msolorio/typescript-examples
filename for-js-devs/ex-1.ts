export {};

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = {
  firstName: 'Jane',
  lastName: 'Foo'
};

console.log(greeter(user));
