import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSelected = true;
  signupSelected = false;

  loginForm = this.fb.group({
    loginId: ['', [Validators.required, Validators.email]],
    loginPassword: ['', [Validators.required, Validators.minLength(8)]]
  });

  signupForm = this.fb.group({
    signupName: ['', [Validators.required, Validators.minLength(4)]],
    signupEmail: ['', [Validators.required, Validators.email]],
    signupNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    signupPassword: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  loginSubmit() {
    console.log(this.loginForm.value);
  }

  signupSubmit() {
    console.log(this.signupForm.value);
  }

}
