import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus;

  searchForm = this.fb.group({
    search: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.loginStatus = isAuthenticated;
      });
  }

  logoutUser() {
    this.authService.logout();
  }

}
