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
  private _productFilter = 'test';
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.products = this.productService.getProducts();
    this.productService.getAPIProducts().subscribe({
      next: (formations) => (this.formations = formations),
      error: (err) => (this.errorMsg = err),
    });
    //this.filteredProducts = this.products;
    console.log(this.formations);
    //this.productFilter = 'pantalon';
  }
  navigateTo() {
    this.router.navigateByUrl('/login');
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
