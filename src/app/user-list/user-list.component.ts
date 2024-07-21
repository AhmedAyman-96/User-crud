import { LocalStorageService } from './../services/localStorage/local-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user-service/user.service';
import { User } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
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
  public userCreated = '';
  @ViewChild('deleteAlert', { static: false })
  deleteAlert!: NgbAlert;
  @ViewChild('createAlert', { static: false })
  createAlert!: NgbAlert;

  constructor(private localStorageService: LocalStorageService, private userService: UserService, private router: Router, private modalService: NgbModal, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(query => {
      if (query["created"] === "create") {
        this.userCreated = 'User Created!';
        setTimeout(() => this.createAlert.close(), 5000);
      } else if (query["created"] === "edit") {
        this.userCreated = 'User Edited!';
        setTimeout(() => this.createAlert.close(), 5000);
      }
    })

  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(currentPage = this.currentPage) {
    this.userService.getUsers(currentPage).subscribe((response) => {
      this.users = [...this.users, ...response.data];
      this.currentPage = response.page;
      this.totalPages = response.total_pages;
      console.log(this.currentPage, this.totalPages)
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
          setTimeout(() => this.deleteAlert.close(), 5000);
        }, err => console.log(err))
      }

    })
  }

  public editUser(id: number) {
    this.router.navigateByUrl('edit-user/' + id)
  }

  public navigateToUser(id: number) {
    this.router.navigateByUrl('user/' + id)
  }

  public goToCreateUser() {
    this.router.navigateByUrl('create-user')

  }



}
