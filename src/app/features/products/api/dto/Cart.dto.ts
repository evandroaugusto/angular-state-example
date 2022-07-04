type CartProduct = {
  productId: number;
  quantity: number;
};

export type CartDTO = {
  id?: number;
  userId: number;
  date: string;
  products: CartProduct[]
}