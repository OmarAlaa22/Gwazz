import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { error } from 'protractor';
import { AlertifyService } from '../_Services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
model:any={};
  constructor(public auth :AuthService,private alert:AlertifyService) { }

  ngOnInit() {
  }
 /*Login*/
Login(){
  this.auth.Login(this.model).subscribe(
    next=>{this.alert.success("تم الدخول بنجاح")},
    error=>{console.log(error);
    }

  )
}
/*Check Login Or Not */
IsLogin(){
return this.auth.LogedIn() ;

}
/*  LOged Out */
LogedOut(){
localStorage.removeItem('token');
this.alert.message("تم تسجيل الخروج");

}
}
