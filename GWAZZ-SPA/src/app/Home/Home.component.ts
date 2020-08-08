import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
registermode:boolean=false;
values:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
registershow(){
  this.registermode=! this.registermode;
}

  registercancel(mode:boolean){
this.registermode=mode;
  }
}
