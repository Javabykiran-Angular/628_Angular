import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  course:string[]=["Core Java","Html,css,js","Advanced java",'MySql',"Spring Core",'Hibernate','Spring Boot','Spring MVC','Angular 16','Docker','AWS'];
  // Array of Object 

  arrProduct:any[]=[
    {
      name:"RealMe",
      price:18000,
      qty:1
    },
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"OnePlus",
      price:45000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    }
  ]

 



}
