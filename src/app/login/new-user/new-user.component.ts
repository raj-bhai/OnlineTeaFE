import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private _FormBuilder: FormBuilder, private _Router: Router) {
    this.loginForm = this._FormBuilder.group({

      otp: ['', [Validators.required]],

    })

  }

  ngOnInit(): void {
  }


  createFormSubmit() {
    console.log("vipul");
  //  this._Router.navigate(['/user'])
    this._Router.navigate(['/provider']);
    
  
  }
}
