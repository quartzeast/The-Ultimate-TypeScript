interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  // Index signature
  // keyof
  readonly [P in keyof Product]: Product[P];
};

type Optinal<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T | null;
};
