import { createAction, props } from "@ngrx/store";
import { User } from "../shared/interfaces/user.interface";

export const login = createAction(
    '[Login Page] User Login',
    props<{user : User}>()
);
