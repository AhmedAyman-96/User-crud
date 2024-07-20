import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { EditUserComponent } from './edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditUserRoutingModule
  ]
})
export class EditUserModule { }
