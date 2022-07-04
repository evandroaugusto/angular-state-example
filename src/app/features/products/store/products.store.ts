import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/Product';

type ProductsState = {
  product: Product | null,
  products: Product[],
  selectedProducts: Product[]
};

const INITIAL_STATE: ProductsState = {
  product: null,
  products: [],
  selectedProducts: []
};

const STORE_KEY = "PRODUCTS_STORE"

@Injectable()
export class ProductsStore {
  private _state: BehaviorSubject<ProductsState>;
  state$: Observable<ProductsState>;

  constructor() {
    const cachedStore = this.getStorage() || INITIAL_STATE;

    this._state = new BehaviorSubject(cachedStore);
    this.state$ = this._state.asObservable();
  }

  setProduct(product: Product|null) {
    this.setState({...this.state, product})
  }

  setProducts(products: Product[]) {
    this.setState({...this.state, products });
  }
  
  addSelectedProduct(product: Product) {
    const selectedProducts = [...this.state.selectedProducts, product];
    this.setState({...this.state, selectedProducts})
  }

  removeSelectedProduct(product: Product) {
    const selectedProducts = this.state.selectedProducts.filter(
      _product => _product.id !== product.id  
    );

    this.setState({...this.state, selectedProducts})
  }

  reset(): void {
    this.setState({...INITIAL_STATE});
  }

  get state(): ProductsState {
    return {...this._state.getValue()};
  }

  private setState(newState: ProductsState) {
    this._state.next(newState);
    this.setStorage(newState);
  }

  private setStorage(state: ProductsState) {
    localStorage.setItem(STORE_KEY, JSON.stringify(this.state));
  }

  private getStorage() {
    return JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
  }
}