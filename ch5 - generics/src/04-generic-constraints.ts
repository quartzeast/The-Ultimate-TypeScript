// T extends number | string
// T extends { name: string }
// interface Person {
//   name: string;
// }
// T extends Person

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  return value;
}

echo(new Person('a'));
echo(new Customer('a'));
