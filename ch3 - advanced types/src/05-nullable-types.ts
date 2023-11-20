// 如何处理空值呢？TS 对 null 和 undefined 的使用是很严格的，因为它们通常是 bug 的来源
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log('Hola!');
}

// greet(null); Argument of type 'null' is not assignable to parameter of type 'string'.
// greet(null); // "strictNullChecks": false
greet(null);
greet(undefined);
