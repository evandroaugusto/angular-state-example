import { Injectable, OnDestroy } from '@angular/core';
import { map, mapTo, merge, of, shareReplay } from 'rxjs';
import { CartApi } from '../../api/cart.api';
import { ProductsApi } from '../../api/products.api';
import { Product } from '../../model/Product';

@Injectable()
export class ProductsFacade implements OnDestroy {
  products$ = this.getProducts$();

  constructor(
    private productsApi: ProductsApi
  ) { }

  ngOnDestroy() { }

  // Streams
  private getProducts$() {
    return this.productsApi.fetchProducts();
  }
}
