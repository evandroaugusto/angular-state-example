import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, switchMap, tap } from 'rxjs';
import { User } from 'src/app/features/products/model/User';
import { UsersApi } from '../../api/users.api';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  private userId$ = this.route.params.pipe(
    map((params: any) => params.id),
    filter(id => !!id),
  );

  userDetail$ = this.userId$.pipe(
    switchMap(id => this.fetchUser(id)),
  )
    
  constructor(
    private api: UsersApi, 
    private route: ActivatedRoute) {
   }

  private fetchUser(userId: number): Observable<User> {
    return this.api.fetchUser(userId);
  }

}
