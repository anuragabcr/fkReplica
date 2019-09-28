import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSelected = true; signupSelected = false;
  loginData: any; signupData;
  loginClicked = false; signupClicked = false;
  signupError;
  isAuthenticated;

  loginForm = this.fb.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    loginPassword: ['', [Validators.required, Validators.minLength(8)]]
  });

  signupForm = this.fb.group({
    signupName: ['', [Validators.required, Validators.minLength(4)]],
    signupEmail: ['', [Validators.required, Validators.email]],
    signupNumber: ['', [Validators.required, Validators.minLength(10)]],
    signupPassword: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.authService.login(this.loginForm.value);
    this.loginClicked = true;
    this.authService.getAuthStatusListener()
      .subscribe((auth) => {
        this.isAuthenticated = auth;
      });
    // $('#modal').modal('hide');
  }

  signupSubmit() {
    this.signupClicked = true;
    this.authService.signup(this.signupForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.signupData = data;
          this.signupError = null;
          this.signupForm.reset();
        },
        (error) => {
          const temp = error;
          this.signupError = temp.error;
          console.log(temp.error);
          this.signupData = null;
        }
      );
  }

}
