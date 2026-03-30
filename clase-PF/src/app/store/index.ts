import { ActionReducerMap } from "@ngrx/store";
import { counterFeatureName, counterReducer, CounterState } from "./counter/counter.reducer";
import { authFeatureName, authReducer, AuthState } from "./auth/auth.reducer";

interface RootState {

}

// clave: valor -> clave el nombre del selector
//valor -> reducer 
export const rootReducer: ActionReducerMap<RootState> = {
    [counterFeatureName]: counterReducer,
    [authFeatureName]: authReducer,
}