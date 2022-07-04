import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SummaryDashboardComponent } from './pages/summary-dashboard/summary-dashboard.component';
import { AnalyticsDashboardComponent } from './pages/analytics-dashboard/analytics-dashboard.component';

const routes: Routes = [
  {
    path: 'summary',
    component: SummaryDashboardComponent
  },
  {
    path: 'analytics',
    component:AnalyticsDashboardComponent
  },
  {
    path: '**',
    redirectTo: 'summary'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouting { }
