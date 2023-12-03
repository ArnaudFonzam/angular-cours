import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { User } from 'src/app/core/model/user.model';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  constructor() {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
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
