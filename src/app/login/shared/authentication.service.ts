import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Login } from 'src/app/shared/interfaces/login.interface';
import { map, catchError } from 'rxjs/operators';
import { CredentialStorageService } from 'src/app/shared/services/credential-storage.service';
import { UserCredentials } from 'src/app/shared/interfaces/usercredentials.interface';

@Injectable()
export class AuthenticationService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1';

  constructor(
    private http: HttpClient,
    private storageService: CredentialStorageService
  ) {}

  login(loginCredentials: Login): Observable<boolean> {
    return this.http
      .post<UserCredentials>(`${this.url}/users/login`, {
        data: loginCredentials,
      })
      .pipe(
        map((response: UserCredentials) => {
          this.storageService.saveCredentials(response);
          return true;
        }),
        catchError((response: HttpErrorResponse) => {
          console.log('hola', response);
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
