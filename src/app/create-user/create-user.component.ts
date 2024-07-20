import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],

    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe(resp => {
      this.router.navigateByUrl('user?created=create')
    }, err => console.log(err));
  }
}
