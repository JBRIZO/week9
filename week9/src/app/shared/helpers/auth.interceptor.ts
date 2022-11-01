import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialStorageService } from '../services/credential-storage.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private credentialStorage: CredentialStorageService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `bearer ${this.credentialStorage.getToken()}`,
      },
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !error.url!.includes('/users/login')) {
          this.snackbar
            .open('You need to login to perform this action.', 'Go to Login')
            .onAction()
            .subscribe(() => {
              this.router.navigate(['/login']);
            });
        }
        if (error.status === 500) {
          this.snackbar.open(
            'An unexpected error ocurred. Please try again later',
            '',
            {
              duration: 3000,
            }
          );
        }
        return throwError(error);
      })
    );
  }
}
