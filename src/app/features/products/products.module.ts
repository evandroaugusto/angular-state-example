import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './products.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsFacade } from './store/products.facade';
import { ProductItemComponent } from './pages/product-list/product-item/product-item.component';
import { ProductFormComponent } from './pages/product-edit/product-form/product-form.component';
import { ProductsSelectedComponent } from './components/products-selected/products-selected.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductsComponent,
    ProductEditComponent,
    ProductFormComponent,
    ProductsSelectedComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ 
    ProductsFacade
  ]
})
export class ProductsModule { }
