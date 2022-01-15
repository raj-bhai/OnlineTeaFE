import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  date: any
  name: any
  phone: any
  email: any
  address: any
  
  profileForm: FormGroup
  constructor(private _FormBuilder: FormBuilder, private _Router: Router) {
    this.profileForm = this._FormBuilder.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
      // photo: [null],
      address: [null],
      date: []
    })
  }
  ngOnInit(): void {
    this.date = JSON.parse(localStorage.getItem("date") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")
    this.phone = JSON.parse(localStorage.getItem("phone") || "")
    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.address = JSON.parse(localStorage.getItem("address") || "")

    this.profileForm.controls['date'].setValue(this.date);
    this.profileForm.controls['name'].setValue(this.name);
    this.profileForm.controls['phone'].setValue(this.phone);
    this.profileForm.controls['email'].setValue(this.email);
    this.profileForm.controls['address'].setValue(this.address);


  }


  profileFormSubmit() {
    console.log("ansit");

    // this.abc = this.profileForm.get('date')?.value
    localStorage.setItem("date", JSON.stringify(this.profileForm.get('date')?.value));
    localStorage.setItem("name", JSON.stringify(this.profileForm.get('name')?.value));
    localStorage.setItem("phone", JSON.stringify(this.profileForm.get('phone')?.value));
    localStorage.setItem("email", JSON.stringify(this.profileForm.get('email')?.value));
    localStorage.setItem("address", JSON.stringify(this.profileForm.get('address')?.value));

    

  }
  isChecking(event: any) {

  }
}
