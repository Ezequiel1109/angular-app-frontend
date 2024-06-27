import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() product: Product ={
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    description: ''  
  }

  @Output() newProductEvent = new EventEmitter();

  onSubmit(productForm: NgForm): void {
    if (productForm.valid) {
      this.newProductEvent.emit(this.product);
      console.log(this.product);
    }
    productForm.reset();
  }

  clean(): void{
    this.product = {
      id: 0,
      name: '',
      price: 0,
      quantity: 0,
      description: '' 
    };
  }
}
