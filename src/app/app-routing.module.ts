import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { FormLoginComponent } from './form-login/form-login.component';

const routes: Routes = [
  { path: 'form-login-component', component: FormLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
