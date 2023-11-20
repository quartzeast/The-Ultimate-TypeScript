// poly = multi
// morphism = form
// 指一个对象可以拥有多种形态
import { Student } from './09-inheritance';
import { Teacher } from './10-method-overriding';
import Person from './09-inheritance';

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

class Principal extends Person {
  override get fullName() {
    return `Principal: ${super.fullName}`;
  }
}

printNames([
  new Student(1, 'John', 'Wick'),
  new Teacher('Mosh', 'Hamedani'),
  new Principal('Mary', 'Smith'),
]);

// Open Closed Principle
// Classes should be open for extension and closed for modification.
