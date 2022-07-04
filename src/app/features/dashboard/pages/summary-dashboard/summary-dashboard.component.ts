import { Component, Inject, OnInit } from '@angular/core';
import MFE_MODULES from 'src/app/core/tokens/mfe-modules.token';

@Component({
  selector: 'app-summary-dashboard',
  templateUrl: './summary-dashboard.component.html',
  styleUrls: ['./summary-dashboard.component.scss']
})
export class SummaryDashboardComponent implements OnInit {
  mfes: any = [];

  constructor(@Inject(MFE_MODULES) mfeModules: any) {
    this.mfes = mfeModules;
  }

  ngOnInit(): void {

  }

}
