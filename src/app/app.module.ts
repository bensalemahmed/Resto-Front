import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './Users/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin/admin.component';

import { AdminListeComponent } from './admin/admin/admin-liste/admin-liste.component';
import { UpdateAdminComponent } from './admin/admin/update-admin/update-admin.component';
import { DeleteAdminComponent } from './admin/admin/delete-admin/delete-admin.component';
import { UserListeComponent } from './admin/simpleUser/user-liste/user-liste.component';
import { UpdateUserComponent } from './admin/simpleUser/update-user/update-user.component';
import { DeleteuserComponent } from './admin/simpleUser/deleteuser/deleteuser.component';
import { AddRestoComponent } from './admin/resto/add-resto/add-resto.component';
import { UpdateRestoComponent } from './admin/resto/update-resto/update-resto.component';
import { DeleteRestoComponent } from './admin/resto/delete-resto/delete-resto.component';
import { GetRestoComponent } from './admin/resto/get-resto/get-resto.component';
import { RestoComponent } from './resto/resto.component';
import { AddPlatComponent } from './resto/plat/add-plat/add-plat.component';
import { GetplatComponent } from './resto/plat/getplat/getplat.component';
import { DeletePlatComponent } from './resto/plat/delete-plat/delete-plat.component';
import { UpdatePlatComponent } from './resto/plat/update-plat/update-plat.component';
import { ReservationComponent } from './resto/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    AdminListeComponent,
    UpdateAdminComponent,
    DeleteAdminComponent,
    UserListeComponent,
    UpdateUserComponent,
    DeleteuserComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    DeleteRestoComponent,
    GetRestoComponent,
    RestoComponent,
    AddPlatComponent,
    GetplatComponent,
    DeletePlatComponent,
    UpdatePlatComponent,
    ReservationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
