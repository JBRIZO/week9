import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Login } from '../interfaces/login.interface';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1';

  constructor(private http: HttpClient) {}

  login(loginCredentials: Login): Observable<boolean> {
    return this.http
      .post(`${this.url}/users/login`, {
        data: loginCredentials,
      })
      .pipe(
        map((response: any) => {
          return true;
        }),
        catchError((response: HttpErrorResponse) => {
          if (response.status === 401) {
            const error = new Error('Invalid email or password');
            return throwError(error);
          } else {
            return throwError('Unknown Error');
          }
        })
      );
  }
}
