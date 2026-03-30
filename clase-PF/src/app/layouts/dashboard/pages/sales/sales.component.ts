import { Component, OnDestroy, OnInit } from '@angular/core';
import { SalesService } from './sales.service';
import { ISale, ISaleForm } from './models';
import { FormControl, FormGroup } from '@angular/forms';
import { IProduct } from '../products/models';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/models';
import { Store } from '@ngrx/store';
import { selectLoadingSales, selectSaleList, selectSalesError, selectSaleState } from './store/sale.selectors';
import { SaleActions } from './store/sale.actions';
import { first, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit, OnDestroy{

  products: IProduct[] = [];
  users: IUser[] = [];

  loadingSales$: Observable<boolean>;
  error$: Observable<unknown>;
  sales$: Observable<ISale[]>
  existsUnsavedChanges = false;

  salesSubcription?:Subscription;

  saleForm = new FormGroup<ISaleForm>({
    quantity: new FormControl(1),
    user: new FormControl(null),
    product: new FormControl(null),
  })

  constructor(
    private saleService: SalesService, 
    private productService: ProductsService,
    private userService: UsersService,
    private store: Store){
      this.loadingSales$ = this.store.select(selectLoadingSales);
      this.error$ = this.store.select(selectSalesError);
      this.sales$ = this.store.select(selectSaleList);
    
    }

  ngOnDestroy(): void {
    this.salesSubcription?.unsubscribe();
  }



  loadProducts(){
    this.productService.getProducts().subscribe({
      next: (v) => (this.products = v),
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.loadSales();
    this.loadUsers();
    this.subscribeToSaleFormChange();
  }

  subscribeToSaleFormChange(): void {
    this.saleForm.valueChanges.subscribe({
      next: (v) => {
        console.log(v);
        this.existsUnsavedChanges = true;
      }
    })
  }

  loadSales(){
    //Dispatch para disparar una accion
   this.store.dispatch(SaleActions.loadSales());
  }

  createSale(){
    this.saleService.createSales(this.saleForm.getRawValue()).subscribe({
      next:(s) => {
        console.log(s);
      }
    });
  }

  loadUsers(){
    this.userService.getUsers().subscribe({
      next: (u) => {
        this.users = u;
      },
      error: () => {},
      complete: () => {}
    })
  }

  
}
