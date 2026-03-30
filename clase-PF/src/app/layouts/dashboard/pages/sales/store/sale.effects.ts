import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SaleActions } from './sale.actions';
import { SalesService } from '../sales.service';

@Injectable()
export class SaleEffects {

  
  private actions$ = inject(Actions); 
  private salesService = inject(SalesService); 


  loadSales$ = createEffect(() =>
    this.actions$.pipe(
      // ofType: Filtra todas las acciones que se disparan
      //en mi aplicacion y toma las acciones que indicamos
      ofType(SaleActions.loadSales),

      // concatena otro observable al anterior
      concatMap(() =>
        this.salesService.getSales().pipe(
          //Si todo sale bien:
          map((data) => SaleActions.loadSalesSuccess({ data })),

          //Si hay un error:
          catchError(error => of(SaleActions.loadSalesFailure({ error })))
        )
      )
    )
  );
}