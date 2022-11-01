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
import { HomeActions } from '../action-types';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';
import { ProductList } from 'src/app/shared/interfaces/productlist.interface';

export const homeFeatureKey = 'home';

interface CategoriesState extends EntityState<Category> {
  categoriesFetched : boolean
}
interface CartState extends EntityState<CartItem> {
  cartFetched: boolean
}
interface ProductsState extends EntityState<Product> {
  productsFetched: boolean
}
const productsAdapter = createEntityAdapter<Product>();
const categoriesAdapter = createEntityAdapter<Category>();
const cartAdapter = createEntityAdapter<CartItem>();

export interface HomeState {
  categories: CategoriesState;
  cartItems: CartState;
  paginatedProducts: ProductList | undefined;
  products: ProductsState;
}

export const initialHomeState: HomeState = {
  categories: categoriesAdapter.getInitialState({ categoriesFetched: false }),
  cartItems: cartAdapter.getInitialState({ cartFetched: false}),
  paginatedProducts: undefined,
  products: productsAdapter.getInitialState( {productsFetched: false }),

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
        {...state.categories, categoriesFetched: true}
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
      cartItems: cartAdapter.addMany(action.cart, {...state.cartItems, cartFetched: true}),
    };
  }),
  on(HomeActions.allProductsLoaded, (state, action) => {
    return {
      ...state,
      paginatedProducts: action.products,
      products: productsAdapter.addMany(action.products.data, {...state.products, coursesFetched: true}),
    };
  }),
  on(HomeActions.cartItemUpdated, (state, action) => {
    return {
      ...state,
      cartItems: cartAdapter.updateOne(action.update, state.cartItems),
    };
  })
);

export const selectCategoryState = (state: HomeState) => state.categories;
export const { selectAll: selectAllCategories } =
  categoriesAdapter.getSelectors();

export const selectCartState = (state: HomeState) => state.cartItems;
export const { selectAll: selectAllCartItems } = cartAdapter.getSelectors();

export const selectProductState = (state: HomeState) => state.products;
export const { selectAll: selectAllProducts, selectEntities } =
  productsAdapter.getSelectors();
