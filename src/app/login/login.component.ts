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

  loginSelected = true;
  signupSelected = false;
  loginData: any;

  loginForm = this.fb.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    loginPassword: ['', [Validators.required, Validators.minLength(8)]]
  });

  signupForm = this.fb.group({
    signupName: ['', [Validators.required, Validators.minLength(4)]],
    signupEmail: ['', [Validators.required, Validators.email]],
    signupNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    signupPassword: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.loginData = this.authService.login(this.loginForm.value);
    console.log(this.loginData);
    // $('#loginModal').modal('hide');
  }

  signupSubmit() {
    console.log(this.signupForm.value);
    this.authService.signup(this.signupForm.value)
      .subscribe(
        (data) => console.log(data),
        (error) => console.log(error)
      );
  }

}
