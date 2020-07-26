import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { error } from 'console';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
values:any;
n:string='omar';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getvalue();
  }
getvalue(){
this.http.get('http://localhost:5000/WeatherForecast').subscribe(
  response=>{
    this.values=response;
    console.log(response)
  },
  error=>{console.log(error);}

)
}
}
