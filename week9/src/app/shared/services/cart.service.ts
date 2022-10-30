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

  headers = {};

  constructor(
    private http: HttpClient,
    private credentialStorage: CredentialStorageService
  ) {}

  getCart(): Observable<Cart> {
    return this.http
      .get<{ data: Cart }>(this.url, {
        headers: {
          Authorization: `bearer ${this.credentialStorage.getToken()}`,
        },
      })
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  addItem(item: CartItem): Observable<boolean> {
    return this.http
      .post<{ data: Cart }>(
        this.url,
        {
          data: {
            items: {
              product_variant_id: item.id,
              quantity: item.quantity,
            },
          },
        },
        {
          headers: {
            Authorization: `bearer ${this.credentialStorage.getToken()}`,
          },
        }
      )
      .pipe(
        map((response) => {
          return response ? true : false;
        })
      );
  }
}
