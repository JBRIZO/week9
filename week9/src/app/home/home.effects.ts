import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HomeActions } from './action-types';
import { tap, concatMap, map } from 'rxjs/operators';
import { ProductService } from '../shared/services/product.service';
import {
  allProductsLoaded,
  allCategoriesLoaded,
  cartLoaded,
} from './home.actions';
import { CategoryService } from '../shared/services/category.service';
import { CartService } from '../shared/services/cart.service';

@Injectable()
export class HomeEffects {
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadCart),
      concatMap(() => this.cartService.getCart()),
      map((cart) => cartLoaded({ cart: cart.items }))
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadProducts),
      concatMap((action) => this.productsService.getProducts()),
      map((products) => allProductsLoaded({ products }))
    )
  );
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadCategories),
      concatMap((action) => this.categoriesService.getCategories()),
      map((categoryList) =>
        allCategoriesLoaded({ categories: categoryList.data })
      )
    )
  );
  constructor(
    private actions$: Actions,
    private productsService: ProductService,
    private categoriesService: CategoryService,
    private cartService: CartService
  ) {}
}
