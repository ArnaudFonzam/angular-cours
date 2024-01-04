import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user.model';
import { UserService } from 'src/app/core/service/user.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  userForm: FormGroup;
  submitted = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ]),
      acceptTerms: new FormControl(false, [Validators.required]),
    });
  }
  public get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
    let user = new User(
      0,
      this.userForm.value.name,
      this.userForm.value.email,
      this.userForm.value.password,
      this.userForm.value.acceptTerms
    );
    this.userForm.reset;
    this.userService.saveUserDetails(user).subscribe((response) => {
      let result = response.JSON();
      if (result > 0) {
        this.router.navigate(['login']);
      }
      if (result == -1) {
        alert(' Registration faillure please try agains');
      }
    });
    console.log(JSON.stringify(this.userForm.value));
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
