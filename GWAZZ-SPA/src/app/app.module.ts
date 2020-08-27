import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from "@angular/forms";
import { AuthService } from './_Services/Auth.service';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './Register/Register.component';
import { ErrorInterseptorProvider } from './_Services/Error.interseptor';
import { AlertifyService } from './_Services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export function tokenGetter() {
   return localStorage.getItem('access_token');
 }
@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      JwtModule.forRoot({
         config: {
           tokenGetter: tokenGetter,
           whitelistedDomains: ['localhost:3001'],
           blacklistedRoutes: ['localhost:3001/auth/']
         }
       }),
       BrowserAnimationsModule,
       BsDropdownModule.forRoot()      
   ],
   providers: [
      AuthService,
      ErrorInterseptorProvider,
      AlertifyService,
      

   ],
   bootstrap: [
      AppComponent,

   ]
})
export class AppModule { }
