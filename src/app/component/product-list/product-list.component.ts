import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFormation } from 'src/app/core/interface/formation.interface';
import { IProduct } from 'src/app/core/interface/product.interface';
import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public title = 'Task Manager';
  public products: IProduct[] = [];
  public filteredProducts: IProduct[] = [];
  private _productFilter = '';
  public formations: IFormation[] = [];
  public errorMsg: string = '';
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productService.getAPIProducts().subscribe({
      next: (formations) => (this.formations = formations),
      error: (err) => (this.errorMsg = err),
    });
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
