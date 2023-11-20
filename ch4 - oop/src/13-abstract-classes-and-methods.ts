// 抽象类是不能被实例化的
abstract class Shape {
  constructor(public color: string) {}
  // 抽象方法不能有方法体，抽象方法只能存在于抽象类中
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  // 如果继承了一个抽象类，则必须实现该抽象类中所有抽象方法
  override render(): void {
    console.log('Rendering a circle');
  }
}
