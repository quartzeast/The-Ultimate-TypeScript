// 继承是一种允许我们复用代码的机制。

export default class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  walk() {
    console.log('Walking');
  }
}

export class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test');
  }
}

let student = new Student(1, 'John', 'wick');
console.log(student);
