import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserDTO } from "./dto/User.dto";

const BASE_API = 'https://fakestoreapi.com';

@Injectable()
export class UsersApi {
  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<UserDTO[]>(`${BASE_API}/users`);
  }

  fetchUser(userId: number) {
    return this.http.get<UserDTO>(`${BASE_API}/users/${userId}`);
  } 
}