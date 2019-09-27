import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus;
  userName;
  cartSize: number;

  searchForm = this.fb.group({
    search: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private cartService: CartService) { }

  ngOnInit() {
    this.loginStatus = this.authService.getIsAuth();
    this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.loginStatus = isAuthenticated;
      });
    this.userName = this.authService.getUserName()
      .subscribe(name => {
        console.log(name);
        this.userName = name;
      });
    this.cartService.getCartSize()
      .subscribe(num => {
        this.cartSize = num;
      });
  }

  logoutUser() {
    this.authService.logout();
  }

}
