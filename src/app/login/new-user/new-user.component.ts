import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.loginForm = new FormGroup({

      otp: new FormControl('', {
        validators: [Validators.required]
      })

    })

  }

  ngOnInit(): void {
  }


  createFormSubmit() {
    console.log(this.loginForm.value.otp);

    if (this.loginForm.value.otp == 123456) {

      this._Router.navigate(['/user'])

    }
    else {

      this._Router.navigate(['/provider']);

    }

  }
}
