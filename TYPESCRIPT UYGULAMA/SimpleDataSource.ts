import { Product } from "./Product";

export class SimpleDataSource {
  [x: string]: any;
  private product: Product[];

  constructor() {
    this.product = new Array<Product>(
      new Product(1, "Samsung S5", "Telefon", 1000),
      new Product(2, "Samsung S6", "Telefon", 2000),
      new Product(3, "Samsung S7", "Telefon", 3000),
      new Product(4, "Samsung S9", "Telefon", 4000),
      new Product(5, "Samsung S10", "Telefon", 5000),
      new Product(6, "Samsung S11", "Telefon", 6000)
    );
  }
}

function getProducts() {
  return this.products;
}
