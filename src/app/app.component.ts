import { Component, OnInit } from '@angular/core';
import { ProductService } from './core/service/product.service';
import { Product } from './core/model/product.model';
import { Router } from '@angular/router';
import { IProduct } from './core/interface/product.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = 'Task Manager';
  public products: IProduct[] = [];
  public filteredProducts: IProduct[] = [];
  private _productFilter = 'test';
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    console.log(this.products);
    this.productFilter = 'pantalon';
  }
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  public get productFilter(): string {
    return this._productFilter;
  }

  public set productFilter(filter: string) {
    this._productFilter = filter;

    this.filteredProducts = this.productFilter
      ? this.filterProduct(this._productFilter)
      : this.products;
  }

  private filterProduct(criteria: string): IProduct[] {
    criteria = criteria.toLocaleLowerCase();
    const res = this.products.filter(
      (product: IProduct) =>
        product.name.toLocaleLowerCase().indexOf(criteria) != -1
    );
    return res;
  }
}
