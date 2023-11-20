class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, string>('1', 'a');
let pair2 = new KeyValuePair('1', 'a'); // TS 可以推断出类型参数 Type arguments
