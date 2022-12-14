import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { HomeState } from '../reducers/home.reducers';
import { tap, first, finalize } from 'rxjs/operators';
import { HomeActions } from '../action-types';
import { stateLoaded } from '../selectors/home.selectors';
import { CredentialStorageService } from 'src/app/shared/services/credential-storage.service';

@Injectable()
export class ProductsResolver implements Resolve<any> {
  loading = false;

  constructor(
    private store: Store<HomeState>,
    private credentialStorage: CredentialStorageService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(
      select(stateLoaded),
      tap((state) => {
        if (!this.loading && !state) {
          this.loading = true;
          this.store.dispatch(HomeActions.loadProducts({}));
          this.store.dispatch(HomeActions.loadCategories());
          if (this.credentialStorage.isLoggedIn())
            this.store.dispatch(HomeActions.loadCart());
        }
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
