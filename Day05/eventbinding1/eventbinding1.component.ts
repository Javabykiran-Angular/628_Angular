import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {
isClick:boolean=true;

  onClick(){
    if(this.isClick==true){
      console.log("Click Event Occur...");
      this.isClick=false;
    }
   

  }


  onImage(){
    console.log("On Image Click...");
  }

  onSend(myevent:any){

    console.log(myevent);
    console.log("Data is "+myevent.value);

    myevent.style.background='green';
    myevent.style.color='white';

  }

  onSend1(myvalue:string){
    console.log(myvalue)

  }


}
