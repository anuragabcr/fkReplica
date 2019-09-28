import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemListener = new Subject<number>();

  url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) { }

  postCart(phone) {
    return this.http.post(this.url, phone)
      .subscribe((data) => {
        console.log(data);
        const temp = Object.keys(data).length;
        this.cartItemListener.next(temp);
    });
  }

  getCart() {
    return this.http.get(this.url);
  }

  putCart(details) {
    return this.http.put(this.url, details);
  }

  deleteCart(id) {
    return this.http.delete(this.url + '/' + id);
  }

  getCartSize() {
    this.getCart()
      .subscribe((data) => {
        const temp = Object.keys(data).length;
        this.cartItemListener.next(temp);
        console.log(temp);
      });
    return this.cartItemListener.asObservable();
  }

}
