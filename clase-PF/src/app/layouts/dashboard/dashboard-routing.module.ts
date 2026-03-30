import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../../core/guards/admin.guard';
import { unsavedChangesGuard } from '../../core/guards/unsaved-changes.guard';


const routes: Routes = [
  {
    /**
     * Path actual: "/dashboard"
     */
    path: '',
    component: DashboardComponent, 
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'  // Exige que el segmento de URL sea exactamente igual al path.
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path:'users',
        //canActivate: [adminGuard],
        loadChildren: () => 
          import('./pages/users/users.module').then((m)=> m.UsersModule),
      },
      {
        path: 'counter',
        loadChildren: () => import('./pages/counter/counter.module')
        .then((m)=>m.CounterModule)
      },
      {
        path:'products',
        loadChildren: () =>
          import('./pages/products/products.module').then((m) => m.ProductsModule)
      },
      {
        path:'sales',
        canDeactivate: [unsavedChangesGuard],
        loadChildren: () =>
          import('./pages/sales/sales.module').then((m) => m.SalesModule)
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
