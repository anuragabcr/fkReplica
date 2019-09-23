import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) { }

  postCart(phone) {
    return this.http.post(this.url, phone)
      .subscribe((data) => {
        console.log(data);
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
}
