import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ShopordersComponent } from './shoporders/shoporders.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    ShopordersComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ProviderRoutingModule
  ]
})
export class ProviderModule { }
