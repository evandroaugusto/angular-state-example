import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-products-selected',
  templateUrl: './products-selected.component.html',
  styleUrls: ['./products-selected.component.scss']
})
export class ProductsSelectedComponent implements OnInit {
  @Input() products: Product[]|null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
