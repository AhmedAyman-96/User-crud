import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(false);

  private readonly BASE_URL: string = 'https://reqres.in/api/login';
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {

    this.isLoginSubject.next(!!localStorageService.getToken())
  }


  public authenticateUser(credintials: any) {
    return this.http.post<void>(`${this.BASE_URL}`, credintials);
  }

  public authenticationSuccess(token: string) {
    this.localStorageService.setToken(token);
    console.log("success")
    this.isLoginSubject.next(true);
  }


  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  logout(): void {
    this.localStorageService.clearToken();
    this.isLoginSubject.next(false);
  }



}
