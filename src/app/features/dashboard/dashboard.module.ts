import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryDashboardComponent } from './pages/summary-dashboard/summary-dashboard.component';
import { AnalyticsDashboardComponent } from './pages/analytics-dashboard/analytics-dashboard.component';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { DashboardRouting } from './dashboard-routing';


@NgModule({
  declarations: [
    SummaryDashboardComponent,
    AnalyticsDashboardComponent,
    BoardCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRouting
  ]
})
export class DashboardModule { }
