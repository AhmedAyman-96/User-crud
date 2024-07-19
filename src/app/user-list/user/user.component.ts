import { UserService } from './../../services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  public user: User | null = null;
  public id: string = '';
  constructor(private userService: UserService, route: ActivatedRoute) {
    route.params.subscribe(param => {
      this.id = param["id"];
    })
  }
  ngOnInit(): void {
    this.getUser(parseInt(this.id));
  }

  private getUser(id: number) {
    this.userService.getUser(id).subscribe(response => {
      this.user = response.data as User;
    })
  }

}
