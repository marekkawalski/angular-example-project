import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../../services/cart.service';

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    window.alert(
      `${this.checkoutForm.value.name} your order has been submitted to address ${this.checkoutForm.value.address}`
    );
    this.checkoutForm.reset();
  }
}
