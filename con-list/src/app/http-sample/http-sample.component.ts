import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-sample',
  templateUrl: './http-sample.component.html',
  styleUrls: ['./http-sample.component.css']
})
export class HttpSampleComponent implements OnInit {

  student ={};
  constructor(private httpClient : HttpClient) { 
    httpClient.post("http://demo2435299.mockable.io/student",{msg:"Hi hello"}).subscribe((response)=>{
      this.student =response;
    })
  }

  ngOnInit() {
  }

}
