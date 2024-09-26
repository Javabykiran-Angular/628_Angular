import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  //ng g p summary
  transform(value: any,start:number=0,end:number=40): any{
      // Type assertion 
      let temp=(<string> value);

      // return (temp.substring(0,25)+"...");  
      return (temp.substring(start,end)+"..."); 
  }

}
