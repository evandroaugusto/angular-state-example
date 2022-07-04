import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(
      m => m.DashboardModule
    )
  },
  {
    path: 'institucional',
    loadChildren: () => import('./features/institutional/institutional.module').then(
      m => m.InstitutionalModule
    )
  },
  {
    path: 'produtos',
    loadChildren: () => import('./features/products/products.module').then(
      m => m.ProductsModule
    )
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./features/users/users.module').then(
      m => m.UsersModule
    )
  },


  // Layout
  {
    path: '',
    outlet: 'header',
    loadChildren: () => import('./core/layout/header/header.module').then(
      m => m.HeaderModule
    )
  },
  {
    path: '',
    outlet: 'footer',
    loadChildren: () => import('./core/layout/footer/footer.module').then(
      m => m.FooterModule
    )
  },

  //
  // redirects
  //
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
