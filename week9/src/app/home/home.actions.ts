import { createAction, props } from "@ngrx/store";
import { Cart } from "../shared/interfaces/cart.interface";
import { CategoryList } from "../shared/interfaces/categorylist.interface";

export const categoriesCreator = createAction(
    "[Home Page] Categories Loaded",
    props<CategoryList>()
);

export const cartCreator = createAction(
    "[Nav Bar] Cart Loaded",
    props<Cart>()
)

