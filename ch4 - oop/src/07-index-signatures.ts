/*
  在 JS 中，我们可以创建一个对象并在随后向其添加属性，因为 JS 中的对象是动态的。
  但是在 TS 中不能这么做，因为 TS 对对象的形状要求非常严格

  但是在某些情况下我们需要动态给对象添加属性，这就是使用 index signatures 的地方
  
  index signatures 用于动态的创建属性
*/
class SeatAssignment {
  // Index Signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Mosh';
// seats['A1'] = 'Mosh';
seats.A2 = 'John';
