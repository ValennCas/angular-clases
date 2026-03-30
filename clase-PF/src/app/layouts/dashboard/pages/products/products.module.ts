import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import { ProductsService } from './products.service';
import { ProductsMockService } from './products-mock.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { StoreModule } from '@ngrx/store';
import { productFeature } from './store/product.reducer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export const API_URL = new InjectionToken('API_URL');

export const RANDOM_NUMBER = new InjectionToken('RANDOM_NUMBER');

export const PRODUCTS = new InjectionToken('PRODUCTS');


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    ProductsRoutingModule, MatTableModule,
    SharedModule,
    StoreModule.forFeature(productFeature),
    EffectsModule.forFeature([ProductEffects]),
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    // useExisting - useClass - useValue - useFactory
    ProductsService,
    // Otra forma de hacerlo (es lo mismo) pero capaz se quiere cambiar la clase (usar MOCK)
    // Un mock en programación es un objeto simulado que imita el
    //  comportamiento de componentes reales 
    //  (bases de datos, APIs, servicios) durante pruebas unitarias,
    //   permitiendo aislar la lógica del software.
    //Sirve para 
    // {
    // provide: ProductsService,
    // useClass: ProductsMockService,
    // },
    // {//useValue
    // provide: API_URL,
    // useValue: 'http://localhost:4200/api',
    // },
    // {
    //   provide: RANDOM_NUMBER,
    //   useFactory: () => {
    //     return Math.random();
    //   }, 
    // },
    // {
    //   provide: PRODUCTS,
    //   useFactory: (productsService: ProductsService) => {
    //     return productsService.getProducts();
    //   }, 
    //   deps: [ProductsService]
    // }
   ]
})
export class ProductsModule { }
