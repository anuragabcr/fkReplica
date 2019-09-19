import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  id;
  product;
  phone;
  selectedImage;
  titles = ['General', 'Display Features', 'OS & Processor Features'];
  objects = ['General', 'Display', 'Processor'];
  keys = [];

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private cartService: CartService) {
    this.id = this.route.snapshot.params.id;
    this.product = this.route.snapshot.params.products;
   }

  ngOnInit() {
    this.productsService.getPhone(this.product, this.id)
      .subscribe((phone) => {
        this.phone = phone;
        this.selectedImage = this.phone.image_1;
        this.keys.push(Object.keys(this.phone.General));
        this.keys.push(Object.keys(this.phone.Display));
        this.keys.push(Object.keys(this.phone.Processor));
      });
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
