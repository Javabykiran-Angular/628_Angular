import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() childStrEvent=new EventEmitter();

  msg:string='Hopes So u R Enjoying Angular Module..';



  onSend(){
    this.childStrEvent.emit(this.msg);
  }

}
