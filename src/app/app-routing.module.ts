import { UpdatePlatComponent } from './resto/plat/update-plat/update-plat.component';
import { DeletePlatComponent } from './resto/plat/delete-plat/delete-plat.component';
import { GetplatComponent } from './resto/plat/getplat/getplat.component';
import { AddPlatComponent } from './resto/plat/add-plat/add-plat.component';
import { RestoComponent } from './resto/resto.component';
import { AddRestoComponent } from './admin/resto/add-resto/add-resto.component';
import { UpdateRestoComponent } from './admin/resto/update-resto/update-resto.component';
import { DeleteRestoComponent } from './admin/resto/delete-resto/delete-resto.component';
import { DeleteuserComponent } from './admin/simpleUser/deleteuser/deleteuser.component';
import { UpdateUserComponent } from './admin/simpleUser/update-user/update-user.component';
import { DeleteAdminComponent } from './admin/admin/delete-admin/delete-admin.component';
import { UpdateAdminComponent } from './admin/admin/update-admin/update-admin.component';
import { AdminListeComponent } from './admin/admin/admin-liste/admin-liste.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './Users/user/user.component';

import { AuthgardGuard } from './gard/authgard.guard';
import { UserListeComponent } from './admin/simpleUser/user-liste/user-liste.component';
import { GetRestoComponent } from './admin/resto/get-resto/get-resto.component';
const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'adminListe',
        component: AdminListeComponent
      },
      {
        path: 'UpdateAdmin',
        component: UpdateAdminComponent
      },
      {
        path: 'deleteAdmin',
        component: DeleteAdminComponent
      },
      {
        path: 'userListe',
        component: UserListeComponent
      },
      {
        path: 'updateuser',
        component: UpdateUserComponent
      },
      {
        path: 'deleteuser',
        component: DeleteuserComponent
      },
      {
        path: 'addresto',
        component: AddRestoComponent
      },
      {
        path: 'updateresto',
        component: UpdateRestoComponent
      },
      {
        path: 'deleteresto',
        component: DeleteRestoComponent
      },
      {
        path: 'getresto',
        component: GetRestoComponent
      },
    ]
    , canActivate: [AuthgardGuard]
  },
  {
    path: 'resto', component: RestoComponent,
    children: [
      {
        path: 'add',
        component: AddPlatComponent
      },
      {
        path: 'get',
        component: GetplatComponent
      },
      {
        path: 'delete',
        component: DeletePlatComponent
      },
      {
        path: 'update',
        component: UpdatePlatComponent
      }
    ]
    , canActivate: [AuthgardGuard]
  },

  { path: 'user', component: UserComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
