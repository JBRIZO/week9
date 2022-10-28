import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CredentialStorageService } from '../shared/services/credential-storage.service';

@Injectable()
export class HomeGuard implements CanActivate {
  constructor(
    private router: Router,
    private credentialStorageService: CredentialStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.credentialStorageService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.credentialStorageService.isLoggedIn();
  }
}
