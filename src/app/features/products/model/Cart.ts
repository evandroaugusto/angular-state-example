import { CartDTO } from "../api/dto/Cart.dto";

type CartProps = { [P in keyof Cart]: Cart[P] };

type CartProduct = {
  productId: number;
  quantity: number;
}

export class Cart {
  id?: number;
  userId: number;
  date: string;
  products: CartProduct[];

  constructor(model?:Partial<CartProps>) {
    this.id = model?.id;
    this.userId = model?.userId || 0;
    this.date = model?.date || Date();
    this.products = model?.products || [];
  }

  getTotalProducts(): number {
    return this.products.length;
  }

  getProducts(): CartProduct[] {
    return this.products;
  }

  addProduct(cartProduct: CartProduct): void {
    this.products.push(cartProduct)
  }

  removeProductFromId(productId: number): void {
    this.products = this.products.filter((product => product.productId !== productId))
  }

  static fromDTO(dto: CartDTO): Cart {
    return new Cart(dto)
  }

  static toDTO(cart: Cart): CartDTO {
    return cart;
  }
}