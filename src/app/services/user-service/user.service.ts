import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserListModel } from '../../models/user-list.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL: string = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  public getUsers(pageNumber: number) {
    return this.http.get<UserListModel>(`${this.BASE_URL}?page=${pageNumber}`);
  }

  public getUser(id: number) {
    return this.http.get<{ data: User; }>(`${this.BASE_URL}/${id}`);
  }

  public createUser(user: any) {
    return this.http.get<{ data: User; }>(`${this.BASE_URL}`, user);
  }


  public deleteUser(id: number) {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

}
