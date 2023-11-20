class ArrayUtils {
  static wrapInArry<T>(value: T) {
    return [value];
  }
}

function wrapInArry<T>(value: T) {
  return [value];
}

let utils = ArrayUtils.wrapInArry(1);
let numbers = wrapInArry('1');
