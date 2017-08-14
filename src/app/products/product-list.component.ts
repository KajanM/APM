
import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  }
)

export class ProductListComponent implements OnInit{

  pageTitle: string = 'Product List';
  imageWidth: number = 40;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string ;

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

  filteredProducts : IProduct[];
  products: IProduct[];

  ngOnInit(): void {
    // console.log("On Init")
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product : IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
