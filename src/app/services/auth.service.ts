import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';
  signup(userData) {
    return this.http.post(this.url + 'users', userData);
  }

  login(userData) {
    return this.http.post(this.url + 'auth', userData);
  }

}
