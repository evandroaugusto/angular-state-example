import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsApi } from '../../api/products.api';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product$: Observable<any>;

  constructor(
    private api: ProductsApi,
    private router: ActivatedRoute
  ) { 
    const productId = this.router.snapshot.params['id'];
    this.product$ = this.api.fetchProduct(productId);
  }
}
