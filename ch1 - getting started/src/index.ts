let age: number = 20; // 给变量 age 添加一个类型注解 type annotation
// age = 'a'; Type 'string' is not assignable to type 'number'.

if (age < 50) age += 10;
console.log(age);
