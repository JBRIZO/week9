import { createAction, props } from '@ngrx/store';
import { CartItem } from '../shared/interfaces/cartitem.interface';
import { Category } from '../shared/interfaces/category.interface';
import { ProductList } from '../shared/interfaces/productlist.interface';
import { Update } from '@ngrx/entity';

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

export const addCartItem = createAction(
  '[Product-List] Cart Item Added',
  props<{ cart: CartItem }>()
);

export const cartItemRemoved = createAction(
  '[Cart] Cart Item Removed',
  props<{ item: CartItem }>()
);

export const loadProducts = createAction(
  '[Product-List] Load Products Pagination',
  props<{ page?: number; size?: number; name?: string; categoryId?: number }>()
);

export const allProductsLoaded = createAction(
  '[Load Products Effect] Paginated Products Loaded',
  props<{ products: ProductList }>()
);

export const cartItemUpdated = createAction(
  '[Cart] Cart Item Updated',
  props<{ update: Update<CartItem> }>()
);

export const clearStore = createAction('[Logout Button] Clean store');
