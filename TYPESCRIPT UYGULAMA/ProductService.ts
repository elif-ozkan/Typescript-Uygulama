import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {
  private dataSource: SimpleDataSource;
  private products: Product[];
  name: void;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getProducts().array.forEach((element) => {
      this.products.push(element);
    });
  }

  getById(id: number): Product {
    return this.products.filter((element) => element.id === id)[0];
  }
  getProducts(): Product[] {
    return this.products;
  }
  saveProduct(product: Product): void {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateId();
      this.products.push(product);
    } else {
      let index;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == product.id) {
          index = i;
        }
      }
    }
  }
  deleteProduct(product: Product): void {
    let index = this.products.indexOf(product);
    if (index > 0) {
      this.products.splice(1, index);
    }
  }

  private generateId(): number {
    let key = 1;

    while (this.getById(key) != null) {
      key++;
    }
    return key;
  }
}
