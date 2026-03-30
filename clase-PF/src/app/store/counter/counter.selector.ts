import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterFeatureName, CounterState } from "./counter.reducer";


// createFeatureSelector : crear selector de la caracteristica
export const counterState = createFeatureSelector<CounterState>(counterFeatureName);

export const counterValue = createSelector(counterState, (state)=> state.value)