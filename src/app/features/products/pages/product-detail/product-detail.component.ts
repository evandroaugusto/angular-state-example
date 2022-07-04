import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsFacade } from '../../store/products.facade';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product$ = this.productsFacade.product$;

  constructor(
    private productsFacade: ProductsFacade,
    private router: ActivatedRoute
  ) {    
    const id = this.router.snapshot.params['id'];
    this.productsFacade.loadProduct(id);
  }

}
