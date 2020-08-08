import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
model:any={};
@Input() valusefromregister:any ;
@Output () cancelRegister =new EventEmitter();
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  register(){
this.auth.Register(this.model).subscribe(
  ()=>{console.log("Done")},
  error=>{console.log(error)}
)
  }
  cancel(){
    console.log("تم الالفاء");
    this.cancelRegister.emit(false);
  }
  
}
