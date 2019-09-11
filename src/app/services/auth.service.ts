import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/users/';
  signup(userData) {
    return this.http.post(this.url, JSON.stringify(userData));
  }

}
