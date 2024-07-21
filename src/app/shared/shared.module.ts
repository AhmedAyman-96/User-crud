import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    DeleteModalComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ], exports: [NavBarComponent, FooterComponent]
})
export class SharedModule { }
