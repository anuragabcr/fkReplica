import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;

  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private http: HttpClient,
              private route: Router) { }

  url = 'http://localhost:3000/';
  signup(userData) {
    return this.http.post(this.url + 'users', userData);
  }

  login(userData) {
    this.http.post(this.url + 'auth', userData)
      .subscribe(
        data => {
          this.token = data;
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          },
        err => {console.log(err); }
        );
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.route.navigate(['/']);
  }

}
