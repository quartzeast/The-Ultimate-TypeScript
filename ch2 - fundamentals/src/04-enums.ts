// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

/*
  TS 默认将枚举的第一个值设置为 0，后面的值逐个加 1
  也可以显示的为枚举量设置值，如果设置的是 number，那么后一个枚举值在此枚举值上 +1
  如果设置的是非 number，则下一个枚举值需要手动设置值
    如 Small = 's', Medium = 'm', Large = 'l',

  如果设置枚举为 const，那么编译器会生成更优化的代码
*/
