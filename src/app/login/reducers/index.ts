import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

export const loginFeatureKey = 'login';

export interface LoginState {}

export const reducers: ActionReducerMap<LoginState> = {};
