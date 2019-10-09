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

  url = 'http://fkreplica-env.8kbsbgaecu.us-east-2.elasticbeanstalk.com/';
  signup(userData) {
    return this.http.post(this.url + 'users', userData);
  }

  login(userData) {
    this.http.post(this.url + 'auth', userData)
      .subscribe(
        data => {
          this.token = data;
          this.saveAuthToken(this.token.token);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          },
        err => {console.log(err); }
        );
  }

  autoAuthUser() {
    const authInformation = this.getAuthToken();
    if (!authInformation) {
      return;
    }
    this.token = authInformation;
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
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
    this.clearAuthToken();
    this.route.navigate(['/']);
  }

  getUserName() {
    return this.http.get(`${this.url}users/name`);
  }

  private saveAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  private clearAuthToken() {
    localStorage.removeItem('token');
  }

  private getAuthToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    return token;
  }

}
