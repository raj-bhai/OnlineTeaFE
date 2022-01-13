import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './login/new-user/new-user.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { ProviderComponent } from './provider/provider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsComponent } from './shared/my-orders/order-details/order-details.component';
import { CartComponent } from './shared/cart/cart.component';
import { UserModule } from './user/user.module';
import { ProviderModule } from './provider/provider.module';
import { RegistrationplaceDirective } from './directive/registrationplace.directive';
import { MyOrdersComponent } from './shared/my-orders/my-orders.component';
import { ServicesComponent } from './services/services.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewUserComponent,
    RegistrationComponent,
    ProviderComponent,
    ServicesComponent,
    MyOrdersComponent,
    

    OrderDetailsComponent,
    CartComponent,
    RegistrationplaceDirective
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    UserModule,
    BrowserAnimationsModule,
    NgbModule,
    ProviderModule,
    ToastrModule.forRoot({  
      preventDuplicates: true,
      maxOpened: 1
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
