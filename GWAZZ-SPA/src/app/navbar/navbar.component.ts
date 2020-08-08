import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/Auth.service';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { error } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
model:any={};
  constructor(private auth :AuthService) { }

  ngOnInit() {
  }
 /*Login*/
Login(){
  this.auth.Login(this.model).subscribe(
    next=>{console.log("تم الدخول بنجاح")},
    error=>{console.log("فشل الدخول")}

  )
}
/*Check Login Or Not */
IsLogin(){
const token=localStorage.getItem('token')
return !! token ;

}
/*  LOged Out */
LogedOut(){
localStorage.removeItem('token');
console.log("تم تسجيل الخروج");

}
}
