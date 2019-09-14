import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token;

  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';
  signup(userData) {
    return this.http.post(this.url + 'users', userData);
  }

  login(userData) {
    this.http.post(this.url + 'auth', userData)
      .subscribe(
        data => {
          this.token = data;
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

  logout() {
    this.token = null;
    this.authStatusListener.next(false);
  }

}
