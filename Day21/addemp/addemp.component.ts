import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Employee } from '../model/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  allcountry:any[]=[];

  addData:Employee=<Employee>{};

  constructor(private service:HttpService,
              private router:Router
  ){}
  ngOnInit() {
    this.getAllCountryFromBackend();
  }

  getAllCountryFromBackend(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        // console.log(response);
        this.allcountry=response;
      })
  }

  onSubmit(){
    this.addData.createdBy="admin";
    this.addData.ceratedDate=Date.now();
    this.addData.updatedBy="admin";
    this.addData.updatedDate=Date.now();

    this.service.addEmployee(this.addData)
    .subscribe((response)=>{
      // console.log(response);
      this.router.navigate(['']);
    })

  }

}
