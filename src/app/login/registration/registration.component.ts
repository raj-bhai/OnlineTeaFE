import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  profileForm: FormGroup
  constructor(private _FormBuilder: FormBuilder, private _Router: Router) {
    this.profileForm = this._FormBuilder.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      email: [null, [Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]],
      // photo: [null],
      address: [null],
    })
  }

  ngOnInit(): void {
  }


  profileFormSubmit() {
    console.log("vipul");
    
    
  }
  isChecking(event:any){
    
  }
}
