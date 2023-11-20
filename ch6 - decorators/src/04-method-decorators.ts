function Log(target: any, methodName: string, descripor: PropertyDescriptor) {
  const original = descripor.value as Function;
  descripor.value = function (...args: any) {
    console.log('Before');
    original.call(this, ...args);
    console.log('After');
  };
}

class Student {
  @Log
  say(message: string) {
    console.log('Student says ' + message);
  }
}
