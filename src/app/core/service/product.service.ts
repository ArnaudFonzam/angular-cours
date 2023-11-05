import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return [
      new Product(1, 'T-shirt', 'T-shirt en coton blanc', 20),
      new Product(2, 'Pantalon', 'Pantalon en jean bleu', 50),
      new Product(3, 'Chaussures', 'Chaussures de sport noires', 100),
      new Product(4, 'Livre', "Roman d'aventure", 25),
      new Product(5, 'Tablette', 'Tablette tactile 10 pouces', 300),
      new Product(6, 'Téléphone', 'Téléphone portable haut de gamme', 100),
    ];
  }
}
