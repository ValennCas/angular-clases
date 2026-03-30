import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './models';
import { API_URL, PRODUCTS, RANDOM_NUMBER } from './products.module';
import { AlertsService } from '../../../../core/services/alerts.service';
import { Store } from '@ngrx/store';
import { ProductActions } from './store/product.actions';
import { selectIsLoading, selectProduct, selectProductsError, selectProductState } from './store/product.selectors';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'price', 'actions'];
  products$ : Observable<IProduct[]>;
  isLoading$: Observable<boolean>;
  productsError$: Observable<any>;

  //products: IProduct[] = [];

// orden ciclo de vida
// constructor()
// Angular asigna los @Input()
// ngOnInit()
// render del template

  //inyeccion de dependencias
  constructor(private productsService:ProductsService,
    private store: Store){ 
      this.isLoading$ = this.store.select(selectIsLoading);
      this.products$ = this.store.select(selectProduct);
      this.productsError$ = this.store.select(selectProductsError);
    }

  //Se dispara cuando se inicializa el componente (cuando aparece en pantalla)
  ngOnInit(): void {
      this.store.dispatch(
        ProductActions.loadProducts()
      );
  }

  createProduct(): void {
    this.store.dispatch(ProductActions.createProduct({
      data: {
        name: "Objeto " + new Date().getTime(),
        price: new Date().getTime(),
      }
    }))
  }

  deleteProductById(id: string): void{
    this.store.dispatch(ProductActions.deleteProductById({id}))
  }
}

