import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  State,
  on,
} from '@ngrx/store';
import { Cart } from 'src/app/shared/interfaces/cart.interface';
import { CategoryList } from 'src/app/shared/interfaces/categorylist.interface';
import { ProductList } from 'src/app/shared/interfaces/productlist.interface';
import { HomeActions } from '../action-types';

export const homeFeatureKey = 'home';

export interface HomeState  {
  categories: CategoryList | undefined;
  cart: Cart | undefined;
  products: ProductList | undefined;
}

export const initialHomeState: HomeState = {
  categories: undefined,
  cart: undefined,
  products: undefined
};

// export const reducers: ActionReducerMap<HomeState> = {
// };

export const homeReducer = createReducer(
  initialHomeState,
  on(HomeActions.cartItemAdded, (state, action) => {
    return {
      categories: state.categories,
      cart: action.cart,
      products: state.products
    };
  }),
  on(HomeActions.categories, (state, action) => {
    return {
      categories: action.categories,
      cart: state.cart,
      products: state.products
    };
  }),
  on(HomeActions.cartItemRemoved, (state,action) => {
    return {
      categories: state.categories,
      cart: state.cart,
      products: state.products
    }
  })
);
