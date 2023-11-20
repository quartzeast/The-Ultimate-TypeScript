import Person from './09-inheritance';

export class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);

// "noImplicitOverride": true
