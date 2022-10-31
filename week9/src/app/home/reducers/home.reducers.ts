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
import { HomeActions } from '../action-types';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';

export const homeFeatureKey = 'home';

interface CategoriesState extends EntityState<Category> {}
interface ProductsState extends EntityState<Product> {}
interface CartState extends EntityState<CartItem> {}
const productsAdapter = createEntityAdapter<Product>();
const categoriesAdapter = createEntityAdapter<Category>();
const cartAdapter = createEntityAdapter<CartItem>();

export interface HomeState {
  categories: CategoriesState;
  cartItems: CartState;
  products: ProductsState;
}

export const initialHomeState: HomeState = {
  categories: categoriesAdapter.getInitialState(),
  cartItems: cartAdapter.getInitialState({ cartItem: undefined }),
  products: productsAdapter.getInitialState(),
};

export const homeReducer = createReducer(
  initialHomeState,
  on(HomeActions.addCartItem, (state, action) => {
    return {
      ...state,
      cartItems: cartAdapter.addOne(action.cart, state.cartItems),
    };
  }),
  on(HomeActions.allCategoriesLoaded, (state, action) => {
    return {
      ...state,
      categories: categoriesAdapter.addMany(
        action.categories,
        state.categories
      ),
    };
  }),
  on(HomeActions.cartItemRemoved, (state, action) => {
    return {
      ...state,
      cartItems: cartAdapter.removeOne(action.item.id!, state.cartItems),
    };
  }),
  on(HomeActions.cartLoaded, (state, action) => {
    return {
      ...state,
      cartItems: cartAdapter.addMany(action.cart, state.cartItems),
    };
  })
);

export const selectCategoryState = (state: HomeState) => state.categories;
export const { selectAll: selectAllCategories } =
  categoriesAdapter.getSelectors();

export const selectCartState = (state: HomeState) => state.cartItems;
export const { selectAll: selectAllCartItems } = cartAdapter.getSelectors();
