import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './login/new-user/new-user.component';
import { RegistrationComponent } from './login/registration/registration.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'registration', component: RegistrationComponent },
  
  {
    path: 'provider',
    loadChildren: () => import('./provider/provider.module').then((x) => x.ProviderModule),

  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((x) => x.UserModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
