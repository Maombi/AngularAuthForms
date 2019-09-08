import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {LoginComponent } from './user/log-in/log-in.component';
import { PublicComponent } from './public/public.component';
import { BookingformComponent } from './public/bookingform/bookingform.component';
import { AuthGuard } from './helpers';
import { RegisterBusComponent } from './user/register-bus/register-bus.component';

const routes: Routes = [
    { 
        path: 'registerbus', component: RegisterBusComponent, canActivate: [AuthGuard] },
    { 
     path: 'home', 
     component: HomeComponent 
    },
     { 
      path: 'public', 
      component: PublicComponent
     },
     { 
      path: 'public/book', 
      component: BookingformComponent
     },

    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },

    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    { path : '', redirectTo:'/public', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
