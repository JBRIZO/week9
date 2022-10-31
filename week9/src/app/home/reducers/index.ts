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
import { cart, categories } from '../home.actions';

export const homeFeatureKey = 'home';

export interface HomeState {
  categories: CategoryList | undefined;
  cart: Cart | undefined;
}

export const initialHomeState: HomeState = {
  categories: undefined,
  cart: undefined,
};

// export const reducers: ActionReducerMap<HomeState> = {
// };

export const homeReducer = createReducer(
  initialHomeState,
  on(cart, (state, action) => {
    return {
      categories: state.categories,
      cart: action,
    };
  }),
  on(categories, (state, action) => {
    return {
      categories: action,
      cart: state.cart,
    };
  })
);
