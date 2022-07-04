import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductsApi } from '../api/products.api';
import { Product } from '../model/Product';
import { ProductsStore } from './products.store';

@Injectable()
export class ProductsFacade {
  products$ = this.store.state$.pipe(
    map(store => store.products)
  );

  product$ = this.store.state$.pipe(
    map(store => store.product)
  );

  selectedProducts$ = this.store.state$.pipe(
    map(store => store.selectedProducts)
  );

  constructor(
    private store: ProductsStore,
    private api: ProductsApi
  ) {
    this.loadProducts();
  }

  addSelectedProduct(product: Product) {
    // realiza alguma operação de efeito colaretal
    // ex: this.api.saveSelectedProducts();
    
    const hasProduct = this.store.state.selectedProducts.find(
      _product => _product.id === product.id
    );

    if(!hasProduct) {
      this.store.addSelectedProduct(product);
      return;
    }

    this.store.removeSelectedProduct(product);
  }

  isSelected(product: Product) {
    return this.store.state.selectedProducts.some(
      _product => _product.id === product.id
    );
  }

  loadProducts(): void {
    this.api.fetchProducts().subscribe(
      products => this.store.setProducts(products)
    );
  }

  refreshProducts(): void {
    this.store.setProducts([]);
    this.loadProducts();
  }

  loadProduct(id: number) {
    const { product } = this.store.state;
    const hasCache = product?.id === Number(id);

    if(hasCache) return;

    // reset product and fetch new value
    this.store.setProduct(null);
    this.api.fetchProduct(id).subscribe(
      product => this.store.setProduct(product)
    );
  }
}
