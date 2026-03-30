import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from '../../../sales/sales.service';
import { ISale } from '../../../sales/models';
import { map, Observable } from 'rxjs';
import { UsersService } from '../../users.service';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  compras$ : Observable<ISale[]>;
  user$ : Observable<IUser | undefined>;
  total: number = 0;
  constructor(private activatedRoute: ActivatedRoute,
    private salesService: SalesService,
    private userSevice: UsersService
  ){
    const id = this.activatedRoute.snapshot.params['id'];

    this.compras$ = this.salesService.getSalesByUserId(id).pipe(
    map(sales => {
      this.total = sales.reduce((sum, sale) => sum + (sale.product?.price || 0), 0);
      return sales; 
    })
  );
    // this.activatedRoute.params.subscribe({
    //   next: (v) => console.log(v),
    // })
    this.user$ = this.userSevice.getUserById(id);
  }

    displayedColumns: string[] = ['id', 'name', 'price'];


}
