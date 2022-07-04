import { map, pipe } from "rxjs";
import { Cart } from "../model/Cart";
import { Product } from "../model/Product";
import { CartDTO } from "./dto/Cart.dto";
import { ProductDTO } from "./dto/Product.dto";

export const productMapper = () => {
  return pipe(
    map((product: ProductDTO) => Product.fromDTO(product)),
  );
};

export const productsMapper = () => {
  return pipe(
    map((products: ProductDTO[]) => products.map(product => Product.fromDTO(product))),
  );
}

export const cartsMapper = () => pipe(
  map((carts: CartDTO[]) => carts.map(cart => Cart.fromDTO(cart))),
)
