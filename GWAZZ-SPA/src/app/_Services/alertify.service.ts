import { Injectable } from '@angular/core';
var alertify = require('alertifyjs');
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }
success(message:string){
alertify.success(message);
}
Error(message:string){
  alertify.error(message);
  }
  warning(message:string){
    alertify.warning(message);
    }
    message(message:string){
      alertify.message(message);
      }
            

}
