import { Component, OnInit } from '@angular/core';
import { AuthService } from './_Services/Auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  helper = new JwtHelperService();
  constructor(public auth:AuthService) {
    
  }
  ngOnInit(){
    const token=localStorage.getItem('token');
    this.auth.decodedtoken=this.helper.decodeToken(token);
  }
}
