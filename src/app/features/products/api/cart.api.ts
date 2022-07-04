import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "../model/Cart";
import { CartDTO } from "./dto/Cart.dto";
import { cartsMapper } from "./mappers";

@Injectable({
  providedIn: 'root'
})
export class CartApi {

  constructor(private httpClient: HttpClient) { }

  fetchCarts(): Observable<Cart[]> {
    return this.httpClient.get<CartDTO[]>('https://fakestoreapi.com/carts').pipe(
      cartsMapper()
    );
  }
}
