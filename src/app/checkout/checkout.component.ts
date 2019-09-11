import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  loginForm = this.fb.group({
    loginId: ['', [Validators.required, Validators.email]],
    loginPassword: ['', [Validators.required, Validators.minLength(8)]]
  });
  deliveryForm = this.fb.group({
    deliveryAddress: ['', [Validators.required]],
    deliveryAddress2: ['', [Validators.required]],
    deliveryState: ['', [Validators.required]],
    deliveryCity: ['', [Validators.required]],
    deliveryZip: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
