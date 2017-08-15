import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  get pageTitle() {
    return this._pageTitle;
  }
  private _pageTitle;

  constructor() {
    this._pageTitle = 'Acme Product Management';
  }
}
