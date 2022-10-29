import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { ProductList } from '../interfaces/productlist.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number = 1, size: number = 20): Observable<ProductList> {
    return this.http.get<ProductList>(
      `${this.url}?include=image_attachment.blob,master&[page][number]=${page}&[page][size]=${size}`
    );
  }
}
