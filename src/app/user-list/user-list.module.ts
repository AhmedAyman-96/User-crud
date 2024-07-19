import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
  ],
  imports: [
    NgbAlert,
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    UserListRoutingModule
  ]
})
export class UserListModule {
}
