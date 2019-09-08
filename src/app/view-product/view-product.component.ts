import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

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

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.product = this.route.snapshot.params.products;
   }

  ngOnInit() {
    this.productsService.getPhone(this.product, this.id)
      .subscribe((phone) => {
        this.phone = phone;
        this.selectedImage = this.phone.image_1;
      });
  }

  snackBar() {
    const x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);
  }

}
