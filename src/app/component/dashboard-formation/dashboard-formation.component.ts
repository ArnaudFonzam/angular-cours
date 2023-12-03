import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-formation',
  templateUrl: './dashboard-formation.component.html',
  styleUrls: ['./dashboard-formation.component.scss'],
})
export class DashboardFormationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit() {}
  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  handlerSubmit() {
    if (this.form.status === 'VALID') {
      console.log(this.form);
    } else {
      console.log('invalid form');
    }
  }
}
