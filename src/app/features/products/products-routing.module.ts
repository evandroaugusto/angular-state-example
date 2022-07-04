import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [ 
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'consultar',
        component: ProductListComponent,
      },
      {
        path:'detalhes/:id',
        component: ProductDetailComponent,
      },
      {
        path:'detalhes/:id/edit',
        component: ProductEditComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
