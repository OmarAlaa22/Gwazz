import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl="http://localhost:5000/auth/";
constructor(private http:HttpClient) { }

Login(model:any){
return  this.http.post(this.baseurl+'Login',model).pipe(
map(
  (Response:any)=>{

    const user =Response;
    if(user){localStorage.setItem('token',user.token);}
  }))}
  Register(modal:any){
    return this.http.post(this.baseurl+'register',modal);
  }

}
