// 在一个地方定义 employee 对象的形状，并可以子多处使用
type Employee = {
  readonly id: number;
  name: string;
  fax?: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'mosh',
  retire: (date: Date) => {
    console.log(date);
  },
};
