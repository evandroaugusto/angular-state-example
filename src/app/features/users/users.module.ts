import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersApi } from './api/users.api';
import { UsersRoutingModule } from './users-routing.module';

//import config from './config';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  providers: [
    UsersApi
  ]
})
export class UsersModule { 

}
