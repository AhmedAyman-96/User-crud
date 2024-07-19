import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user.component';


@NgModule({
  declarations: [
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreateUserRoutingModule
  ]
})
export class CreateUserModule { }
