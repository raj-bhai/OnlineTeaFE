import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  greenDefaultValue: any
  masalaDefaultValue: any
  gingerDefaultValue: any
  constructor() { }

  ngOnInit(): void {
    this.greenDefaultValue = 0
    this.masalaDefaultValue = 0
    this.gingerDefaultValue = 0
  }

  greenMinus() {
    if (this.greenDefaultValue > 0) {
      this.greenDefaultValue = this.greenDefaultValue - 1
    }
  }
  masalaMinus() {
    if (this.masalaDefaultValue > 0) {
      this.masalaDefaultValue = this.masalaDefaultValue - 1
    }
  }
  gingerMinus() {
    if (this.gingerDefaultValue > 0) {
      this.gingerDefaultValue = this.gingerDefaultValue - 1
    }
  }

  greenPlus() {
    this.greenDefaultValue = this.greenDefaultValue + 1
  }
  masalaPlus() {
    this.masalaDefaultValue = this.masalaDefaultValue + 1
  }
  gingerPlus() {
    this.gingerDefaultValue = this.gingerDefaultValue + 1
  }

}
