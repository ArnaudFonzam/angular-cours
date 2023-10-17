import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss'],
})
export class FirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit(): void {}
}
