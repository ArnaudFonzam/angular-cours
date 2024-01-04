import { IFormation } from '../interface/formation.interface';

export class Formation implements IFormation {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public level: string,
    public price: string,
    public language: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.level = level;
    this.price = price;
    this.language = language;
  }
}
