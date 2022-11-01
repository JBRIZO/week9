import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
declare function require(name: string): any;


@Injectable()
export class CamelCaseInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const camelcaseKeys = require('camelcase-keys-deep');
    return next.handle(request).pipe(
      map((response : HttpEvent<unknown>) => {
        if(response instanceof HttpResponse && response.body){
          return response.clone({
            body: camelcaseKeys(response.body)
          })
        }
        return response
      })
    );
  }
}
