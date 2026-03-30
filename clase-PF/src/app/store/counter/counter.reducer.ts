import { createReducer, on } from "@ngrx/store";
import { restar, sumar } from "./counter.actions";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
};

export const counterFeatureName = "counter";

//Antes se podia hacer con un switch
export const counterReducer = createReducer(
    initialState,
    on(sumar, (state) => {
        return {
            value: state.value + 1
        };
    }),
    on(restar, (state) => {
        return {
            value: state.value - 1 
        };
    })
);