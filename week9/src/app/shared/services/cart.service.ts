import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialStorageService } from './credential-storage.service';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart.interface';
import { map } from 'rxjs/operators';
import { CartItem } from '../interfaces/cartitem.interface';

@Injectable()
export class CartService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1/cart';


  constructor(
    private http: HttpClient
  ) {}

  getCart(): Observable<Cart> {
    return this.http
      .get<{ data: Cart }>(this.url)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  addItem(itemId: number, quantity: number): Observable<boolean> {
    return this.http
      .post<{ data: Cart }>(
        this.url,
        {
          data: {
            items: [
              {
                product_variant_id: itemId,
                quantity: quantity,
              },
            ],
          },
        }
      )
      .pipe(
        map((response) => {
          return response ? true : false;
        })
      );
  }

  deleteItem(itemId: number): Observable<Cart> {
    return this.http
      .request<{ data: Cart }>('put', this.url, {
        body: {
          data: {
            items: [
              {
                id: itemId,
                _destroy: true,
              },
            ],
          },
        },
      })
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}
