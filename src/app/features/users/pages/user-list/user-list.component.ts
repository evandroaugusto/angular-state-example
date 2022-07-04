import { Component, createNgModuleRef, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { UserListFacade } from './user-list.facade';
import { Observable } from 'rxjs';

//import { UiComponentsService } from 'mfeHost/UiLib';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [ UserListFacade ]
})
export class UserListComponent implements OnInit {
  users$ = this.facade.users$;

  constructor(
    private facade: UserListFacade,
  ) { 

  }

  ngOnInit() { 
  }

}
