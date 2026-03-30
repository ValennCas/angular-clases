import { createFeature, createReducer, on } from '@ngrx/store';
import { ProductActions } from './product.actions';
import { IProduct } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export const productFeatureKey = 'product';

export interface State {
  products: IProduct[];
  isLoading: boolean;
  error: string | null | HttpErrorResponse;
}

export const initialState: State = {
  products: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  // Accion cargar productos
  on(ProductActions.loadProducts, (state) => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  //Los productos se cargaron sin errores
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      products: action.data,
    }
  }),

  //Hubo algun error al cargar los productos
  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error,
    }
  }),

  on(ProductActions.createProduct, (state) => {
    return{
      ...state,
      isLoading: true,
    }
  }),
  
  on(ProductActions.createProductSuccess, (state, action) => {
    return{
      ...state,
      products: [...state.products, action.data],
      isLoading: false,
    }
  }),
  on(ProductActions.createProductFailure, (state, action) => {
    return{
      ...state,
      isLoading: false,
      error: action.error
    }
  }),

  //DELETE
  on(ProductActions.deleteProductById, (state) => {
    return{
      ...state,
      isLoading: true,
    }
  }),
  
  on(ProductActions.deleteProductByIdSuccess, (state, action) => {
    return{
      ...state,
      products: state.products.filter((el) => el.id !== action.data.id),
      isLoading: false,
    }
  }),

  on(ProductActions.deleteProductByIdFailure, (state, action) => {
    return{
      ...state,
      isLoading: false,
      error: action.error
    }
  })
);

export const productFeature = createFeature({
  name: productFeatureKey,
  reducer,
});

