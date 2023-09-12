import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _ProductService = new ProductService();

let result;
result = _ProductService.getProducts();
result = _ProductService.getById(2);

let p = new Product(1, "Iphone", "Telefon", 40000);

console.log(result);
