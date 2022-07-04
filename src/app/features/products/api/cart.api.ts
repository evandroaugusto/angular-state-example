import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, pipe } from "rxjs";
import { Cart } from "../model/Cart";
import { Product } from "../model/Product";
import { CartDTO } from "./dto/Cart.dto";

const cartsMapper = () => pipe(
  map((carts: CartDTO[]) => carts.map(cart => Cart.fromDTO(cart))),
)

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
