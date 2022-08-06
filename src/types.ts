export type Indexable = {
  id: number
};

export type Product = Indexable & {
  name: string
  amount: string
};

export type AddProduct = Omit<Product, 'id'>;

export type User = Indexable & {
  username: string
  classe: string
  level: number
  password: string
};

export type AddUser = Omit<User, 'id'>;

export type Order = Indexable & {
  userId: number
  productsIds: number[]
};