import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  map} from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl="http://localhost:5000/auth/";
 helper = new JwtHelperService();
 decodedtoken:any;

constructor(private http:HttpClient) { }

Login(model:any){
return  this.http.post(this.baseurl+'Login',model).pipe(
map(
  (Response:any)=>{

    const user =Response;
    if(user){localStorage.setItem('token',user.token);
    this.decodedtoken=this.helper.decodeToken(user.token);
    console.log(this.decodedtoken);
  }

  }))}
  Register(modal:any){
    return this.http.post(this.baseurl+'register',modal);
  }
  LogedIn(){
    try{
         const token=localStorage.getItem('token');
    return ! this.helper.isTokenExpired(token);
    }
    catch{
      return false;
    }
 
  }


}
