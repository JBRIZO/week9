import { createAction, props } from '@ngrx/store';
import { Cart } from '../shared/interfaces/cart.interface';
import { CategoryList } from '../shared/interfaces/categorylist.interface';

export const categories = createAction(
  '[Home Page] Categories Loaded',
  props<CategoryList>()
);

export const cart = createAction('[Nav Bar] Cart Loaded', props<Cart>());

// export const
