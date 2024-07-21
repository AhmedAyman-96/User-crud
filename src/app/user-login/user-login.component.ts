import { LocalStorageService } from './../services/localStorage/local-storage.service';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth-service.service';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  @ViewChild('loginAlert', { static: false })
  loginAlert!: NgbAlert;
  public errorMessage = '';
  constructor(private route: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.authenticateUser(this.loginForm.value).subscribe((resp: any) => {
      this.route.navigateByUrl('');
      this.authService.authenticationSuccess(resp.token)
    }, err => {
      console.error(err);
      this.errorMessage = 'Wrong Credentials!';
      setTimeout(() => this.loginAlert.close(), 5000);
    })

  }
}
