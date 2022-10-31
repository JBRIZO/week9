import { createAction, props } from '@ngrx/store';
import { Cart } from '../shared/interfaces/cart.interface';
import { CartItem } from '../shared/interfaces/cartitem.interface';
import { Category } from '../shared/interfaces/category.interface';
import { ProductList } from '../shared/interfaces/productlist.interface';

export const loadCategories = createAction('[Product-List] Load Categories');

export const allCategoriesLoaded = createAction(
  '[Load Categories Effect] Categories Loaded',
  props<{ categories: Category[] }>()
);

export const loadCart = createAction('[Product-List] Load Cart');

export const cartLoaded = createAction(
  '[Load Cart Effect] Cart Loaded',
  props<{ cart: CartItem[] }>()
);

export const cartItemAdded = createAction(
  '[Product-List] Cart Item Added',
  props<{ cart: Cart }>()
);

export const cartItemRemoved = createAction(
  '[Cart] Cart Item Removed',
  props<{ item: CartItem }>()
);

export const loadProducts = createAction('[Product-List] Load Products');

export const allProductsLoaded = createAction(
  '[Load Products Effect] Products Loaded',
  props<{ products: ProductList }>()
);
