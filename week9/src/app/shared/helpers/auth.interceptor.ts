import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialStorageService } from '../services/credential-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private credentialStorage: CredentialStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `bearer ${this.credentialStorage.getToken()}`,
      },
    });

    return next.handle(request);
  }
}