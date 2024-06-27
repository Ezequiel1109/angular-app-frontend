import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private products: Product[] = [];

  private url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}
  findAll(): Observable<Product[]>{
      return this.http.get<Product[]>(this.url).pipe(
        map((response: any) => response._embedded.products as Product[]),
      );
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.url, product);
  }

  update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}/${product.id}`, product); 
  }

  remove(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
