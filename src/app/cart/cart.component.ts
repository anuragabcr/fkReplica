import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  phones;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCart()
      .subscribe((data) => {
        this.phones = data;
      });
  }

}
