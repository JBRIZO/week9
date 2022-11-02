import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Like } from '../interfaces/like.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LikesService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1/likes';

  constructor(private http: HttpClient) {}

  likeProduct(product_id: number): Observable<Like> {
    return this.http
      .post<{ data: Like }>(this.url, {
        data: { product_id: product_id, kind: 'up' },
      })
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }

  dislikeProduct(product_id: number): Observable<Like> {
    return this.http
      .post<{ data: Like }>(this.url, {
        data: { product_id: product_id, kind: 'down' },
      })
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}
