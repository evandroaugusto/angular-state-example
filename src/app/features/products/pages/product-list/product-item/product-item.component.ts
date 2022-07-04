import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;
  @Input() isSelected: boolean = false;

  @Output() productSelected = new EventEmitter<Product>();

  constructor() {   }

  ngOnInit(): void {
  }

  toggleSelect(product:Product) {
    this.productSelected.emit(product);
  }
}
