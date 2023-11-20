// any 类型：表示任何类型的值，应该尽可能的避免使用 any

function render(document: unknown) {
  // document.move(); 'document' is of type 'unknown'.
  // Narrowing
  if (typeof document === 'string') {
    document.toUpperCase();
  }
  // 也可以使用 instanceof 运算符来执行 type narrowing
  // 使用 unknown 类型优先于使用 any 类型，因为 TS 编译器强制我们做一些类型检查来保证我们调用的方法存在于目标对象
  // 但是对于 any 类型，编译器不会强制我们这样做，因为我们可以在代码中随意调用方法，而不会报错，但是对于不存在的方法，
  // 运行时程序就会崩溃，如 document.whateverWeWant()，当 document: any 时，TS 不会报错，但是 whateverWeWant
  // 不存在时，程序就会崩溃，所以尽量使用 unknown，不使用 any
}
