import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://fkreplica-env.8kbsbgaecu.us-east-2.elasticbeanstalk.com/home/';

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  config = {headers: {'x-auth-token': this.authService.getToken}};

  getPhones(product) {
    return this.http.get(this.url + product);
  }

  getPhone(product, id) {
    return this.http.get(this.url + product + '/' + id);
  }
}
