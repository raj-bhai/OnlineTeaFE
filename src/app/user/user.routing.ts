import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '../shared/cart/cart.component';
import { MyOrdersComponent } from '../shared/my-orders/my-orders.component';
 import { OrderDetailsComponent } from '../shared/my-orders/order-details/order-details.component';
import { MyaccountComponent } from '../shared/myaccount/myaccount.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { UserComponent } from './user.component';


const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'my-account', component: MyaccountComponent },
            { path: 'my-orders', component: MyOrdersComponent },
            { path: 'order-details', component: OrderDetailsComponent },
            { path: 'cart', component: CartComponent }
        ]
    },
 
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule],
    providers: []
})
export class UserRoutingModule { }