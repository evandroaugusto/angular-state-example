import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './pages/sobre/sobre.component';
import { MatrizReferenciaComponent } from './pages/matriz-referencia/matriz-referencia.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'matriz-referencia',
    component: MatrizReferenciaComponent
  },
  {
    path: '**',
    redirectTo: 'sobre'
  }
]

@NgModule({
  declarations: [
    SobreComponent,
    MatrizReferenciaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InstitutionalRoutingModule {
  constructor() {  }
}
