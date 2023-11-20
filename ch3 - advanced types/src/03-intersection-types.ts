// 交集类型表示 weight 同时是 number 和 string 类型
// 但这是不现实的，不可能有一个变量的类型同时是 number 和 string
let weight: number & string;

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// 使用 intersection 类型，我们可以将不同的类型组合成一个新类型
type UIWidget = Draggable & Resizable;

// 要初始化 textBox 对象，我们需要实现 Draggable 和 Resizable 中的所有成员
let textBox: UIWidget = {
  drag() {},
  resize: () => {},
};

// union 类型和 intersection 类型都是组合类型的方式
