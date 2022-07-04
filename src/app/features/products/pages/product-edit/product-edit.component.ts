import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { Product } from '../../model/Product';
import { ProductsFacade } from '../../store/products.facade';
import { ProductEditFacade } from './product-edit.facade';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [ProductEditFacade]
})
export class ProductEditComponent {
  editForm: FormGroup;
  product$ = this.productsFacade.product$;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private productsFacade: ProductsFacade,
  ) {
    this.editForm = this.buildForm();
    
    const productId$ = this.route.params.pipe(
      map(params => params['id'])
    );

    productId$.subscribe(id => this.productsFacade.loadProduct(id))
  }

  saveProduct() { }

  private buildForm(): FormGroup {
    return this.fb.group({
      title: ["", [Validators.required]],
      body: ["", [Validators.required]],
      image: [null]
    })
  }
}
