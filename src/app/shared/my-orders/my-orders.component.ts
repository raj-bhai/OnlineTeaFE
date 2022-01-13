import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  
  receviedReferrals:any

  constructor() { }

  ngOnInit(): void {
    this.receviedReferrals=""
  }



  onChoseLocation(event:any) {
console.log(event);

  }


}
