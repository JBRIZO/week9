import { createAction, props } from '@ngrx/store';
import { Cart } from '../shared/interfaces/cart.interface';
import { CartItem } from '../shared/interfaces/cartitem.interface';
import { CategoryList } from '../shared/interfaces/categorylist.interface';
import { ProductList } from '../shared/interfaces/productlist.interface';

export const categories = createAction(
  '[Home Page] Categories Loaded',
  props<{ categories: CategoryList }>()
);

export const cartItemAdded = createAction(
  '[Product-List] Cart Item Added',
  props<{ cart: Cart }>()
);

export const cartItemRemoved = createAction(
  '[Cart] Cart Item Removed',
  props<{ item: CartItem }>()
);

export const loadProducts = createAction(
  '[Product-List] Load Products'
)

export const allProductsLoaded = createAction(
  '[Load Products Effect] Products Loaded',
  props<{products : ProductList}>()
)
