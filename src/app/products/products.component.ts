import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  phones;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private cartService: CartService) {
    this.products = this.route.snapshot.params.products;
   }

  ngOnInit() {
    this.productsService.getPhones(this.products)
    .subscribe((phone) => this.phones = phone);
  }

  addToCart(phone) {
    this.cartService.putCart(phone);
  }

  snackBar() {
    const x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);
  }

}
