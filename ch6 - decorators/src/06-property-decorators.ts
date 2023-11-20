function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descripor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `Property should be at least ${length} characters long`
          );
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descripor);
  };
}
class User {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

let user = new User('1234');
