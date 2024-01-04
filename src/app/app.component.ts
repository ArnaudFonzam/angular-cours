import { Component, OnInit } from '@angular/core';
import { ProductService } from './core/service/product.service';
import { Product } from './core/model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './core/interface/product.interface';
import { IFormation } from './core/interface/formation.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Task Manager';
  public products: IProduct[] = [];
  public filteredProducts: IProduct[] = [];
  public formations: IFormation[] = [];
  public errorMsg: string = '';
  constructor(private router: Router) {}
  public userLogin = false;
  ngOnInit() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') != null) {
      this.userLogin = true;
    }
  }
  navigateTo(url: string) {
    this.router.navigateByUrl('/' + url);
  }
  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
}
