import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  public isLoggedIn = false;
  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(
      isLoggedIn => {
        console.log("log", isLoggedIn);
        this.isLoggedIn = isLoggedIn
      }
    )
  }

  public logOut() {
    this.authService.logout();
  }
}
