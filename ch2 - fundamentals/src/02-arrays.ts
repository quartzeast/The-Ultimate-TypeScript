/*
  JS 中的数组是动态的，每个元素可以是不同的类型
    let numbers = [1, 2, '3'];

  let numbers: number[] = [1, 2, 3];
  
*/
let numbers1 = [1, 2, 3]; // 因为每个元素都是 number， 因此 TS 可以推断出 numbers 的类型为 number[]
let numbers2 = []; // any[]
numbers2[0] = 1;
numbers2[1] = '2';

numbers1.forEach(n => n.toFixed(2));
