import { createReducer, on } from "@ngrx/store";
import { IUser } from "../../layouts/dashboard/pages/users/models"
import { authActions } from "./auth.actions";

export interface AuthState {
    authUser: null | IUser;
}

const initialState: AuthState = {
    authUser: null,
}

export const authFeatureName = "auth";

const MOCK_AUTH_USER = {
                id: 1,
                createdAt: new Date(),
                email: 'ema@gmail.com',
                lastName: 'aa',
                firstName: 'ema',
                role: 'ADMIN',
    };

export const authReducer = createReducer(initialState,
    on(authActions.login, (state, action) => {
        if (action.payload.email !== "user@gmail.com" || action.payload.password !== '123456') {
            alert("Datos incorrectos");
            return state;
        }
        else {
            localStorage.setItem('token', 'abcdefghijklmn');
            return {
                authUser: MOCK_AUTH_USER,
            }
        }
    }),
    on(authActions.logout, () => {
        localStorage.removeItem('token');
        return initialState;
    })
)