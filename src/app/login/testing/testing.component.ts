import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  date: any
  name: any
  phone: any
  email: any
  address: any
  ndate: any
  array: any = []
  constructor() {
    this.array.push({ name: "dev_raj", phone: 9696, address: "Noida", salary: 4000 }, {
      name: "asd", phone: 7878, address: "Faridabad", salary: 900
    }, {
      name: "qwe", phone: 9898, address: "Ghaziabad", salary: 1000
    }, {
      name: "mnb", phone: 2323, address: "G.Noida", salary: 5000
    })
  }

  ngOnInit(): void {
    this.date = JSON.parse(localStorage.getItem("date") || "")
    this.name = JSON.parse(localStorage.getItem("name") || "")
    this.phone = JSON.parse(localStorage.getItem("phone") || "")
    this.email = JSON.parse(localStorage.getItem("email") || "")
    this.address = JSON.parse(localStorage.getItem("address") || "")

    console.log(this.date);
    this.ndate = moment(this.date).format("YYYY-MM-DD")
    console.log(this.ndate);

  }

}
