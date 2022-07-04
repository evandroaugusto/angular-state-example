import { Injectable } from "@angular/core";
import { UsersApi } from "../../api/users.api";

@Injectable()
export class UserListFacade {
  users$ = this.api.fetchUsers();

  constructor(private api: UsersApi) {
  }

  ngOnDestroy() {
  }
}