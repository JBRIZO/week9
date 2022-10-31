import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeActions } from './action-types';
import { tap, concatMap,map } from 'rxjs/operators';
import { ProductService } from '../shared/services/product.service';
import { allProductsLoaded } from './home.actions';

@Injectable()
export class HomeEffects {
  cartLoad$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(HomeActions.cartItemAdded),
        tap((action) => {
          console.log(action);
        })
      ),
    { dispatch: false }
  );

  loadProducts$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(HomeActions.loadProducts),
      concatMap(action => this.productsService.getProducts()),
      map(products => allProductsLoaded({products}))

    )
  )
  constructor(private actions$: Actions, private productsService : ProductService) {}
}
