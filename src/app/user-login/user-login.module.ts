import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth/auth-service.service';
import { LocalStorageService } from '../services/localStorage/local-storage.service';


@NgModule({
  declarations: [
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    NgbAlert,
    ReactiveFormsModule,
    UserLoginRoutingModule
  ], providers: [],

})
export class UserLoginModule { }
