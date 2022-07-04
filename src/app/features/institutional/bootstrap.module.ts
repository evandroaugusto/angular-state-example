import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootstrapConfig } from './bootstrap-config';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      loadChildren: () => {
        return import('./institutional.module').then(m => m.InstitutionalModule)
      }
    }])
  ]
})
export class InstitutionalModule { 
  constructor() { }

  static get dashboardConfig() {
    return BootstrapConfig;
  }
}

