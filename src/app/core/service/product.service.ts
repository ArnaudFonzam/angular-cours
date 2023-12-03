import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormation } from '../interface/formation.interface';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  getProducts(): Product[] {
    return [
      new Product(
        1,
        'T-shirt',
        'T-shirt en coton blanc',
        20,
        '../assets/images/shoping.jpg'
      ),
      new Product(
        2,
        'Pantalon',
        'Pantalon en jean bleu',
        50,
        '../assets/images/shoping.jpg'
      ),
      new Product(
        3,
        'Chaussures',
        'Chaussures de sport noires',
        100,
        '../assets/images/shoping.jpg'
      ),
      new Product(
        4,
        'Livre',
        "Roman d'aventure",
        25,
        '../assets/images/shoping.jpg'
      ),
      new Product(
        5,
        'Tablette',
        'Tablette tactile 10 pouces',
        300,
        '../assets/images/shoping.jpg'
      ),
      new Product(
        6,
        'Téléphone',
        'Téléphone portable haut de gamme',
        100,
        '../assets/images/shoping.jpg'
      ),
    ];
  }

  // Make a call to the backent to retrieve the data
  getAPIProducts(): Observable<IFormation[]> {
    return this.http.get<IFormation[]>(`${this.apiUrl}/formations`);
  }
  /*
  postAPIProducts(Product product):Observable<IFormation> {
    return this.http.post<IFormation>(`${this.apiUrl}/formations`);
  }*/

  products$ = (): Observable<any> =>
    this.http.get<any>(`${this.apiUrl}/formations`);
}
