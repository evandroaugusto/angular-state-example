import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsFacade } from '../../store/products.facade'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$ = this.productsFacade.products$;
  selectedProducts$ = this.productsFacade.selectedProducts$;

  constructor(
    private productsFacade: ProductsFacade
  ) { }

  productSelected(product: Product) {
    this.productsFacade.addSelectedProduct(product);
  }

  isSelected(product: Product) {
    return this.productsFacade.isSelected(product);
  }
}