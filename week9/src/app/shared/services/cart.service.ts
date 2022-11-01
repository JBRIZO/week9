import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Cart } from '../interfaces/cart.interface';
import { map, catchError } from 'rxjs/operators';
import { CartItem } from '../interfaces/cartitem.interface';

@Injectable()
export class CartService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1/cart';

  constructor(private http: HttpClient) {}

  getCart(): Observable<Cart> {
    return this.http.get<{ data: Cart }>(this.url).pipe(
      map((response) => {
        return response.data;
      })
    );
  }

  addItem(itemId: number, quantity: number): Observable<Cart> {
    return this.http
      .post<{ data: Cart }>(this.url, {
        data: {
          items: [
            {
              product_variant_id: itemId,
              quantity: quantity,
            },
          ],
        },
      })
      .pipe(
        map((response) => {
          return response.data;
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
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error)
          let errorMessage: Error = new Error('');
          if (error.status === 422) {
            errorMessage.message = 'There are no items in the cart.';
          }
          return throwError(errorMessage);
        })
      );
  }

  modifyItem(
    cartItemId: number | string,
    cartItemChanges: Partial<CartItem>
  ): Observable<CartItem | undefined> {
    return this.http
      .request<{ data: Cart }>('put', this.url, {
        body: {
          data: {
            items: [
              {
                id: cartItemId,
                quantity: cartItemChanges.quantity,
              },
            ],
          },
        },
      })
      .pipe(
        map((response) => {
          return response.data.items.find(
            (item) => item.id === cartItemChanges.id
          );
        })
      );
  }
}
