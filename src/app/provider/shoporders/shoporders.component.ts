import { Component, OnInit } from '@angular/core';
import { NotifierService } from '../../services/helper/notifier.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-shoporders',
  templateUrl: './shoporders.component.html',
  styleUrls: ['./shoporders.component.css']
})
export class ShopordersComponent implements OnInit {
  types: any
  closeResult: any
  isFormSubmitting = false
  isVerified = false
 
  isDeclined = false
  isAccept=false
  constructor(private modalService: NgbModal, private _NotifierService: NotifierService) {
    this.types = [];
  }

  ngOnInit(): void {
    this.types.push("Pending", "Delivered", "Cancelled")
    console.log(this.types);


  }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  verify() {
    this.isFormSubmitting = true;
    this._NotifierService.showInfo('Verified');
    this.isVerified = true;
  }

}
