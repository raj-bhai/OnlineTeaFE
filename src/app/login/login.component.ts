import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _FormBuilder: FormBuilder, private _Router: Router) {
    this.loginForm = this._FormBuilder.group({

      phone: ['', [Validators.required]],

    })

  }

  ngOnInit(): void {


  }
  loginFormSubmit() {
    debugger
    console.log("vipul");
    this._Router.navigate(['/new-user'])
   
  }


}
