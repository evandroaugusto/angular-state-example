import { ProductDTO } from "../api/dto/Product.dto";

type ProductProps = { [P in keyof Product]: Product[P] };

export class Product {
  id?: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }

  constructor(model?:Partial<ProductProps>) {
    this.id = model?.id;
    this.title = model?.title || '';
    this.price = model?.price || '';
    this.category = model?.category || '';
    this.description = model?.description || '';
    this.image = model?.image || '';
    this.rating = model?.rating || {
      rate: 0,
      count: 0
    }
  }

  static fromDTO(dto: ProductDTO): Product {
    return new Product(dto)
  }

  static toDTO(Product: Product): ProductDTO {
    return Product;
  }
}