import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
model:any={};
@Input() valusefromregister:any ;
@Output () cancelRegister =new EventEmitter();
  constructor(private auth:AuthService,private alert:AlertifyService) { }

  ngOnInit() {
  }
  register(){
this.auth.Register(this.model).subscribe(
  ()=>{this.alert.success("Done")},
  error=>{this.alert.warning(error)}
)
  }
  cancel(){
    console.log("تم الالفاء");
    this.cancelRegister.emit(false);
  }
  
}
