import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { ProductDTO } from './dto/Product.dto';
import { CategoryDTO } from './dto/Category.dto';
import { productMapper, productsMapper } from './mappers';

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {

  constructor(private httpClient: HttpClient) { }

  fetchProducts(): Observable<Product[]> {
    return this.httpClient.get<ProductDTO[]>('https://fakestoreapi.com/products').pipe(
      productsMapper()
    );
  }

  fetchProduct(productId: number): Observable<Product> {
    return this.httpClient.get<ProductDTO>(`https://fakestoreapi.com/products/${productId}`).pipe(
      productMapper()
    );
  }

  fetchCategories(): Observable<Category[]> {
    return this.httpClient.get<CategoryDTO[]>(`https://fakestoreapi.com/products/categories`);
  }
}
