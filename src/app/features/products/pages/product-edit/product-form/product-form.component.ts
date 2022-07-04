import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../../model/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() form?: FormGroup;
  @Input() product?: Product;

  @Output() formSent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.populateForm();
  }

  saveForm(form: FormGroup) {
    this.formSent.emit(true);
  }

  private populateForm(): void {
    this.form?.setValue({
      title: this.product?.title || '',
      body: this.product?.description || '',
      image: null
    })
  }
}
