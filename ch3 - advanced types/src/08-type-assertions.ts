// 某些时候我们比 TS 更清楚某个对象的类型

let phone = document.getElementById('phone') as HTMLInputElement;
// let phone = <HTMLInputElement>document.getElementById('phone') ;

// HTMLElement 表示任何元素，其表现的像其他类型元素一个基类或父类，因此我们有更具体的元素类型比如：HTMLInputElement
// 这个类型的元素有一个额外的属性称之为 value，可以读取到用户输入的值
// 但是 HTMLElement 中是没有一个 value 属性的，所以我们就告诉 TS，嘿，我比你更清楚这个对象的类型，这是一个 HTMLInputElement 类型的对象，请以 HTMLInputElement 的类型对待这个对象
// 在 TS 中，as 关键做的并不是类型转换，它只是表明我们比 TS 更清楚这个对象的类型，如果 document.getElementById('phone') 返回的
// 不是 HTMLInputElement 类型的对象，那么此处的类型断言也不会引起任何异常，但是当我们尝试去访问 value 属性时，程序就会崩溃
phone.value;
