// never 表示永远不会出现的值

function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

processEvents();
// console.log('Hello World'); // 永远不会执行 "allowUnreachableCode": false
// 如果不添加 :never 返回值类型，那么 TS 编译器就会自动推断为返回 void
// 那么 console.log('Hello World'); 就会变成 reachable，所以要使用 never 类型
