import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { PipesYDirectivasModule } from './pages/pipes-y-directivas/pipes-y-directivas.module';
import { ProductsModule } from './pages/products/products.module';
import { Clase09RxjsModule } from './pages/clase-09-rxjs/clase-09-rxjs.module';
import { Clase10Rxjs2Module } from './pages/clase-10-rxjs-2/clase-10-rxjs-2.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDrawerContent,
    RouterModule,
    Clase09RxjsModule,
    Clase10Rxjs2Module,
    ProductsModule,
    UsersModule,

  ]

})
export class DashboardModule {}