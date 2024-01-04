import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/core/model/user-login/user-login.model';
import { UserService } from 'src/app/core/service/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  public get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    let user = new UserLogin(
      this.userForm.value.email,
      this.userForm.value.password
    );
    this.userService.login(user).subscribe((response) => {
      if (response > 0) {
        let token = response.headers.get('Authorization');
        localStorage.setItem('token', token);
        localStorage.setItem('id', response);
        this.router.navigateByUrl('/manageformation');
        Swal.fire('Added', 'login successfully.', 'success');
      }
      (error) => {
        Swal.fire('Fail', 'login Failled Try Agains.', 'error');
      };
    });
  }

  public handleForm(): void {
    if (this.formValid()) {
      this.onSubmit();
    }
  }

  public formValid(): boolean {
    return this.userForm.status === 'VALID';
  }
}
