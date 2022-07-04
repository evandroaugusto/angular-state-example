import { Component } from '@angular/core';
import { ProductsFacade } from './products-facade';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsFacade]
})
export class ProductListComponent  {
  products$ = this.facade.products$;

  constructor(
    private facade: ProductsFacade
  ) { }
}