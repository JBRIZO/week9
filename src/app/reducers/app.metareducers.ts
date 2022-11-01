import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  INIT,
  UPDATE,
} from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export function localStorageMetaReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<any> {
  return (state: AppState, action: Action) => {
    const storageItemName = 'globalState';
    if (action.type === INIT || action.type === UPDATE) {
      const valueLocal = localStorage.getItem(storageItemName);
      if (valueLocal) {
        return JSON.parse(valueLocal);
      }
    }

    const nextState = reducer(state, action);
    localStorage.setItem(storageItemName, JSON.stringify(nextState));
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [localStorageMetaReducer]
  : [];
