import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient ) { }

  getAllProducts() : Observable<Iproduct[]>{
    console.log(this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`))
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`);

  }

  getAllCategories() : Observable<Icategory[]>{
    console.log(this.httpClient.get<Icategory[]>(`${environment.baseUrl}/categories`))
    return this.httpClient.get<Icategory[]>(`${environment.baseUrl}/categories`);

  }

  getProductById(id: number): Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`);
  }

  getProductsByCatId(catId: number) : Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products?catId=${catId}`)
  }

  addNewProduct(product : Iproduct) : Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`
    ${environment.baseUrl}/products`,product).pipe(
      retry(2),
      catchError((error)=>{
        return throwError(()=>{
          return new Error("Error in new Product");
        })
      })
    );
  }


}
