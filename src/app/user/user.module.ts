import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from '../user/user.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../user/dashboard/dashboard.component'
import { MyaccountComponent } from '../shared/myaccount/myaccount.component';
import { UserComponent } from './user.component';
import { GooglePlaceDirective } from '../directive/google-places.directive';



@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    MyaccountComponent,
    GooglePlaceDirective,

  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    
    FormsModule,
 
  ],
  providers: [],
})
export class UserModule { }
