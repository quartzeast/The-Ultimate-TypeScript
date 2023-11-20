// 使用联合类型可以表示一个变量或函数参数的类型是多种类型中的一个
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');
