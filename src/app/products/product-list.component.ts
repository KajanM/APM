import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  }
)

export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string;
  errorMessage: string;

  constructor(private _productService: ProductService) {
    // this.listFilter = 'cart';
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[];

  ngOnInit(): void {
      this._productService.getProducts().subscribe(products => {this.products = products;
        this.filteredProducts = this.products;
      },
        error => this.errorMessage = <any>error);

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
