import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { ProductList } from '../interfaces/productlist.interface';
import { map } from 'rxjs/operators';
import { Pagination } from '../interfaces/pagination.interface';

@Injectable()
export class ProductService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(
    page: number = 1,
    size: number = 20,
    name: string = '',
    categoryId: number | null = null
  ): Observable<ProductList> {
    return this.http.get<ProductList>(
      `${
        this.url
      }?include=category,image_attachment.blob,master&[page][number]=${page}&[page][size]=${size}&[filter][name_start]=${name}&[filter][category_id_eq]=${
        categoryId === null ? '' : categoryId
      }`
    );
  }

  getProduct(productSlug: string): Observable<Product> {
    return this.http
      .get<{ data: Product; meta: Pagination }>(
        `${this.url}/${productSlug}?include=master,category,image_attachment.blob`
      )
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}
