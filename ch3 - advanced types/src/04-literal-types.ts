// 某些时候我们想限制可以赋值给一个变量的值，这时我们就可以使用字面量类型
// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';
