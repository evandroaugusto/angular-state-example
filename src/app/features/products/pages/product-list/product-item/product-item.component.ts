import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product?: Product;

  constructor() {   }
}
