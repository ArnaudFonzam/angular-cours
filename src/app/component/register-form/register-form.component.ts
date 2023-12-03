import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  userForm: FormGroup;
  submitted = false;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
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
