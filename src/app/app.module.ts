import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './user/log-in/log-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { BuslistComponent } from './public/buslist/buslist.component';
import { BookingformComponent } from './public/bookingform/bookingform.component';
import { RegisterBusComponent } from './user/register-bus/register-bus.component';
import { MyBusListComponent } from './layout/my-bus-list/my-bus-list.component';
import { PublicComponent } from './public/public.component';
import { NavbarComponent } from './public/navbar/navbar.component';

import { fakeBackendProvider } from './helpers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    BuslistComponent,
    BookingformComponent,
    RegisterBusComponent,
    MyBusListComponent,
    PublicComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
