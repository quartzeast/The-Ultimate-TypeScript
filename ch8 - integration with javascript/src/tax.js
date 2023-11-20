export function calculateTax(income) {
  return income * 0.3;
}

export function sayHello() {
  console.log('Hello');
}

// 在添加 tax.d.ts 后，tax.js 如果还是报错，就可以关闭 "checkJs": true
