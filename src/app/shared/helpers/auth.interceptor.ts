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
        let errorMessage: Error = new Error('');
        if (error.status === 401 && !error.url!.includes('/users/login')) {
          this.snackbar
            .open('You need to login to perform this action.', 'Go to Login', {
              duration: 5000,
            })
            .onAction()
            .subscribe(() => {
              this.router.navigate(['/login']);
            });
        } else {
          errorMessage.message = this.getErrorMessage(error);
          this.snackbar.open(errorMessage.message, '', { duration: 4000 });
        }
        return throwError(errorMessage);
      })
    );
  }

  getErrorMessage(error: HttpErrorResponse): string {
    const code = error.error.errors[0].code;
    let message = error.error.errors[0].message;
    switch (code) {
      case '4e6f7420656e6f7567682073746f636b':
        message = 'Not enough stock.';
        break;
      case '4974656d2070726f647563745f76617269616e745f6964206973206e6f7420756e6971756520706572206f72646572':
        message = 'Item already added.';
        break;
      case '63616e277420626520626c616e6b':
        message = 'No items in the cart';
    }
    return message;
  }
}
