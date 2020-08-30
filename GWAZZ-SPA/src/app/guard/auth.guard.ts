import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/Auth.service';
import { AlertifyService } from '../_Services/alertify.service';

@Injectable({
  providedIn: 'root'
})

  
export class AuthGuard implements CanActivate {
  constructor(private Auth:AuthService,private alert:AlertifyService,private router:Router) { }

  canActivate():boolean {
    if(this.Auth.LogedIn()){
      return true;
    }
    this.alert.Error("بجب تسجيل الدخول اولا");
    this.router.navigate(['/home']);
    return true;
  }
}
