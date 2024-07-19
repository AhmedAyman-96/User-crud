import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlert, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';



@NgModule({
  declarations: [
    DeleteModalComponent,],
  imports: [
    CommonModule,
    NgbModule,
  ]
})
export class SharedModule { }
