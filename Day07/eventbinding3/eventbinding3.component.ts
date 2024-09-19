import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component {

  dispResult:string='';
  onChange(myvalue:string){
    
    if(myvalue.length>6){
      // alert("U r character limit is exceed..")
      this.dispResult="sumit123, Sumitrao";
    }else{
      console.log("Change Event Occur...");
    }

  }

}
