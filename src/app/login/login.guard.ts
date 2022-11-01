import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialStorageService } from '../shared/services/credential-storage.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(
    private credentialStorageService: CredentialStorageService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.credentialStorageService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
    return !this.credentialStorageService.isLoggedIn();
  }
}
