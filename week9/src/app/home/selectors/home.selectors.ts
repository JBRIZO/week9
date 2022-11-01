import { createFeatureSelector, createSelector } from '@ngrx/store';
import { homeFeatureKey, HomeState } from '../reducers/home.reducers';

import * as fromHome from '../reducers/home.reducers';

export const selectHomeState = createFeatureSelector<HomeState>(homeFeatureKey);

export const selectCategoryState = createSelector(
  selectHomeState,
  fromHome.selectCategoryState
);

export const selectAllCategories = createSelector(
  selectCategoryState,
  fromHome.selectAllCategories
);

export const selectCartState = createSelector(
  selectHomeState,
  fromHome.selectCartState
);

export const selectAllCartItems = createSelector(
  selectCartState,
  fromHome.selectAllCartItems
);

export const selectCartItemsCount = createSelector(
  selectHomeState,
  (state) => state.cartItems.ids.length
);

export const selectAllProducts = createSelector(
  selectHomeState,
  (state) => state.paginatedProducts!
);

export const selectProductEntityState = createSelector(
  selectHomeState,
  fromHome.selectProductState
);

export const selectAllProductEntities = createSelector(
  selectProductEntityState,
  fromHome.selectEntities
);

export const selectProductById = (id: number) =>
  createSelector(selectAllProductEntities, (entities) => entities[id]);

export const isCartLoaded = createSelector(
  selectCartState,
  (state) => state.cartFetched
);

export const areProductsLoaded = createSelector(
  selectHomeState,
  (state) => state.products !== undefined
);

export const areCategoriesLoaded = createSelector(
  selectCategoryState,
  (state) => state.categoriesFetched
);

export const stateLoaded = createSelector(
  selectHomeState,
  isCartLoaded,
  areProductsLoaded,
  areCategoriesLoaded,
  (cartLoaded, productsLoaded, categoriesLoaded) =>
    cartLoaded && productsLoaded && categoriesLoaded
);
