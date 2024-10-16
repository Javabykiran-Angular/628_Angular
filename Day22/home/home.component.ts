import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  isSelect:boolean=false;
  id!:any;

  constructor(private service:HttpService,
              private router:Router
  ){}
  
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
      this.service.getAllRecord()
      .subscribe((response:any)=>{
        // console.log(response)
        this.empData=response;
      })
  }

  onEdit(id:any){
    this.isSelect=true;
    this.id=id;
  }


  onUpdate(){
    if(this.isSelect){
      // Update record logic
      this.router.navigate(['/addemp',this.id])
    }else{
      alert("Please Select a Record To update...");
    }
  }

  onDelete(){
    if(this.isSelect){
      // Delete record logic
      if(confirm("Do You want to delete This Record..")){
        this.service.deleteEmployee(this.id)
        .subscribe((response)=>{
          console.log(response);
          this.getDataFromBackend();
        })
      }
     
    }else{
      alert("Please Select a Record To Delete...");
    }
  }


}
