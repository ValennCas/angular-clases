import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginData } from "../../layouts/auth/models";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        //props<{payload: LoginData}>
        login: props<{payload: LoginData}>(),
        logout: emptyProps(),
    }
})

//export const login = createAction("[AUTH] login")