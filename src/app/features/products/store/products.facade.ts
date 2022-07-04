import { Injectable } from '@angular/core';
import { 
  BehaviorSubject, 
  distinctUntilChanged, 
  ReplaySubject, 
  shareReplay, 
  switchMap, 
  startWith
} from 'rxjs';
import { ProductsApi } from '../api/products.api';

@Injectable()
export class ProductsFacade {
  private productId$ = new ReplaySubject<number>(1);
  private refreshProducts$ = new BehaviorSubject(true);

  private loadProducts$ = this.api.fetchProducts().pipe(
    startWith(null)
  );

  products$ = this.refreshProducts$.pipe(
    switchMap(() => this.loadProducts$),
    shareReplay(1)
  );

  product$ = this.productId$.pipe(
    distinctUntilChanged(),
    switchMap(id => this.api.fetchProduct(id).pipe(
      startWith(null)
    )),
    shareReplay(1)
  )

  constructor(
    private api: ProductsApi
  ) { }

  refreshProducts(): void {
    this.refreshProducts$.next(true);
  }

  loadProduct(id: number) {
    this.productId$.next(id);
  }
}
