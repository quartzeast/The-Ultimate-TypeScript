/*
  JS 中的对象是动态的，对象的形状（shape）在程序的整个生命周期中可以改变。

  不要盲目的使用语言特性，而是要根据业务逻辑来使用语言特性
  比如设置 name 为可选的是不符合现实逻辑的，因为每个员工都必须要有一个 name
  但是可以设置 fax 为可选的，因为不是每个员工都有传真号的

  readonly modifier

  使用箭头函数的语法来注解方法的类型
*/
let employee: {
  readonly id: number;
  name: string;
  fax?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};
