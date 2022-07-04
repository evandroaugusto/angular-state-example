import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay, switchMap, tap } from 'rxjs';
import { ProductsApi } from '../../api/products.api';
import { Product } from '../../model/Product';
import { ProductEditFacade } from './product-edit.facade';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [ProductEditFacade]
})
export class ProductEditComponent {
  editForm: FormGroup;

  productId$ = this.route.params.pipe(
    map((params: any) => params?.id),
  );

  product$ = this.productId$.pipe(
    switchMap(id => this.api.fetchProduct(id)),
    shareReplay({refCount: true, bufferSize: 1})
  );

  constructor(
    private api: ProductsApi,
    private fb: FormBuilder, 
    private route: ActivatedRoute
  ) {
    this.editForm = this.buildForm();
    
    this.product$.subscribe(
      (product) => this.popupateFromProduct(product)
    );
  }

  private popupateFromProduct(product: Product) {
    this.editForm.setValue({
      title: product.title,
      body: product.description,
      image: ''
    })
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      title: ["", [Validators.required]],
      body: ["", [Validators.required]],
      image: [""]
    })
  }
}
