import { createFeature, createReducer, on } from '@ngrx/store';
import { SaleActions } from './sale.actions';
import { ISale } from '../models';

export const saleFeatureKey = 'sale';

export interface State {
  loadingSales: boolean;
  sales: ISale[];
  error: unknown;
}

export const initialState: State = {
  loadingSales : false,
  sales: [],
  error:null
};

export const reducer = createReducer(
  initialState,
  on(SaleActions.loadSales,(state) => {
    return {
      ...state,
      loadingSales: true,
    }
  }),

  // el caso exitoso
  on(SaleActions.loadSalesSuccess, (state, action) => {
    return {
      ...state,
      sales: action.data,
      loadingSales: false
    }
  }),

  //el caso error
  on(SaleActions.loadSalesFailure, (state, action) => {
    return {
      ...state,
      loadingSales: false,
      error: action.error
    }
  }),
);

export const saleFeature = createFeature({
  name: saleFeatureKey,
  reducer,
});

