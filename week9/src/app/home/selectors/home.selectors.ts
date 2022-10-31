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
