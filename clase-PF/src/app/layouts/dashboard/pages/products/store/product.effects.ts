import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ProductActions } from './product.actions';
import { ProductsService } from '../products.service';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class ProductEffects {


    private actions$ = inject(Actions); 
    private productsService = inject(ProductsService); 

    

      

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.loadProducts),
      concatMap(() =>
        this.productsService.getProducts().pipe(

          // El servicio responde "OK"
          map(data => ProductActions.loadProductsSuccess({ data })),

          // El servicio responde "ERROR"
          catchError(error => of(ProductActions.loadProductsFailure({ error }))))
      )
    );
  });

  // CREATE PRODUCTS
  createProducts$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.createProduct),
      concatMap((action) =>
        this.productsService.createProducts(action.data).pipe(

          // El servicio responde "OK"
          map(data => ProductActions.createProductSuccess({ data })),

          // El servicio responde "ERROR"
          catchError(error => of(ProductActions.createProductFailure({ error }))))
      )
    );
  });


  // DELETE PRODUCTS
  deleteProductsById$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProductActions.deleteProductById),
      concatMap((action) =>
        this.productsService.deleteProductById(action.id).pipe(

          // El servicio responde "OK"
          map(data => ProductActions.deleteProductByIdSuccess({ data })),

          // El servicio responde "ERROR"
          catchError(error => of(ProductActions.deleteProductByIdFailure({ error }))))
      )
    );
  });


  errors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProductsFailure, 
        ProductActions.deleteProductByIdFailure, 
        ProductActions.createProductFailure),
        tap((action) => {
          if(action.error instanceof HttpErrorResponse){
            // Swal.fire({
            //   icon: "error",
            //   text: err['message']
            // })
          }
        })
    )
  },
  {dispatch: false} // No quiero que este efecto dispare ninguna otra acción.
)
}
