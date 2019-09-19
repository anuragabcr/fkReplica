import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) { }

  putCart(phone) {
    return this.http.post(this.url, phone);
  }

  getCart() {
    return this.http.get(this.url);
  }
}
