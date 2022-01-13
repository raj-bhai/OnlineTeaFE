import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../shared/cart/cart.component';
import { OrderDetailsComponent } from '../shared/my-orders/order-details/order-details.component';
import { MyaccountComponent } from '../shared/myaccount/myaccount.component';

import {DashboardComponent  } from './dashboard/dashboard.component';

import { ProviderComponent } from './provider.component';
// import { MyaccountComponent } from '../shared/myaccount/myaccount.component';
import { ShopordersComponent } from './shoporders/shoporders.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
       { path: 'my-account', component: MyaccountComponent },
       { path: 'my-orders', component: ShopordersComponent },
      { path: 'order-details', component: OrderDetailsComponent },
      { path: 'cart', component: CartComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
