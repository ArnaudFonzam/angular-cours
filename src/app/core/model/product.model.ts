import { IProduct } from '../interface/product.interface';

export class Product implements IProduct {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public image: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
