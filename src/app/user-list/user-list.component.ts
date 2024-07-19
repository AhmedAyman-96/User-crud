import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../shared/delete-modal/delete-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  public currentPage = 1;
  public totalPages = 0;
  public successMessage = '';
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert;

  constructor(private userService: UserService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(currentPage = this.currentPage) {
    this.userService.getUsers(currentPage).subscribe((response) => {
      this.users = [...this.users, ...response.data];
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
    }, err => console.log(err));

  }

  public loadMore() {
    this.currentPage += 1;
    this.getUsers(this.currentPage)
  }

  public deleteUser(userName: string, id: number) {
    const modalRef = this.modalService.open(DeleteModalComponent)
    modalRef.componentInstance.userName = userName;
    modalRef.result.then(result => {
      if (result) {
        this.userService.deleteUser(id).subscribe(resp => {
          this.successMessage = 'User Deleted!';
          setTimeout(() => this.selfClosingAlert.close(), 5000);
        }, err => console.log(err))
      }

    })
  }

  public navigateToUser(id: number) {
    this.router.navigateByUrl('user/' + id)
  }



}
