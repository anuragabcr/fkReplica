import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:3000/home/';

  constructor(private http: HttpClient) { }

  getPhones(product) {
    return this.http.get(this.url + product);
  }

  getPhone(product, id) {
    return this.http.get(this.url + product + '/' + id);
  }
}
