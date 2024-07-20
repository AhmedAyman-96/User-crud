import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  userForm!: FormGroup;
  submitted = false;
  user: User = {} as User;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    activatedRoute.params.subscribe(params => {
      this.initForm();
      userService.getUser(parseInt(params["id"])).subscribe(resp => {
        this.user = resp.data;
        this.fillForm();

      }, err => console.log(err))
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe(resp => {
      this.router.navigateByUrl('user?created=edit')
    }, err => console.log(err));
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  private fillForm() {
    this.userForm.setValue({ job: this.user.email, name: `${this.user.first_name} ${this.user.last_name}` })
  }
}
