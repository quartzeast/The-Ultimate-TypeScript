interface Product {
  name: string;
  price: number;
}

class Store1<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value);
  }
}
