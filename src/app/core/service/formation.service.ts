import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormation } from '../interface/formation.interface';
import { Formation } from '../model/formation.model';
@Injectable({
  providedIn: 'root',
})
export class FormationService {
  apiUrl: string = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}
  // Make a call to the backent to retrieve the data
  getFormations(): Observable<IFormation[]> {
    return this.http.get<IFormation[]>(`${this.apiUrl}/formations`);
  }

  addFormation(formation: Formation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/formations`, formation);
  }

  updateFormation(formation: Formation): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/formations`, formation);
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/formations`);
  }
  /*
  postAPIProducts(Product product):Observable<IFormation> {
    return this.http.post<IFormation>(`${this.apiUrl}/formations`);
  }*/

  products$ = (): Observable<any> =>
    this.http.get<any>(`${this.apiUrl}/formations`);
}
