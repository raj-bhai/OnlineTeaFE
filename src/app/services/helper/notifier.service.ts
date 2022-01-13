import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotifierService {

    constructor(
        private _ToastrService: ToastrService
    ) { }

    showSuccess(msg: string): void {
        this._ToastrService.success(msg);
    }
 
    showError(msg: string): void {
        this._ToastrService.error(msg);
    }
    showInfo(msg: string): void {
        this._ToastrService.info(msg);
    }

    showWarning(msg: string): void {
        this._ToastrService.warning(msg);
    }
    

}
