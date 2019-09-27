import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  phones;
  grandTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart()
      .subscribe((data) => {
        this.phones = data;
        for (const i of this.phones) {
          this.grandTotal += i.quantity * i.price;
        }
      });
  }

  updateQuantity(quan, id, n) {
    if (quan === -1 && n === 1) {
      return;
    }
    if (quan === 1 && n === 10) {
      return;
    }
    this.cartService.putCart({product: id, quantity: quan})
      .subscribe((data) => {
        this.phones = data;
        let total = 0;
        for (const i of this.phones) {
          total += i.quantity * i.price;
        }
        this.grandTotal = total;
      });
  }

  removeItem(id) {
    this.cartService.deleteCart(id)
      .subscribe((data) => {
        this.phones = data;
        let total = 0;
        for (const i of this.phones) {
          total += i.quantity * i.price;
        }
        this.grandTotal = total;
        this.cartService.getCartSize();
      });
  }

}
