import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { StartRatingComponent } from './shared/components/start-rating/start-rating.component';
import { DashboardFormationComponent } from './component/dashboard-formation/dashboard-formation.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    ProductListComponent,
    StartRatingComponent,
    DashboardFormationComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: ProductListComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'authentication',
        component: FormLoginComponent,
      },
      {
        path: 'register',
        component: RegisterFormComponent,
      },
      {
        path: 'ourformations',
        component: ProductListComponent,
      },
      {
        path: 'authentication/manageformation',
        component: DashboardFormationComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
