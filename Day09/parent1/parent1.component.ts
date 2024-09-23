import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  msg:string="Welcome to Angular Module";
  
  json={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  childStrDataReceived:string='';

}
