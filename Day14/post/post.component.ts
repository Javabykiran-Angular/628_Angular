import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];

  myid:number=0;
  mytitle:string='';
  mybody!:string;

  isHidden:boolean=true;

  constructor(private service:HttpService){ }
  ngOnInit(): void {
   this.getDataFromBackend();
  }

  getDataFromBackend(){
    this.service.getData()
    .subscribe((response:any)=>{
      console.log(response);
      this.posts=response;
    },(myerror)=>{
        alert("Something is went Wrong");
    })
  }

  onSend(mytitle:any,mybody:any){
    let jsonObj={
      title:mytitle,
      body:mybody
    }
    this.service.postData(jsonObj)
    .subscribe((response)=>{
      console.log(response)
    })

  }


  onEdit(item:any){
    console.log(item);
    this.myid=item.id;
    this.mytitle=item.title;
    this.mybody=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let jsonObj={
      id:this.myid,
      title:this.mytitle,
      body:this.mybody
    }

    this.service.updateData(jsonObj)
    .subscribe((response)=>{
      // console.log(response);
      // alert("Data is Updatated");
      this.isHidden=true;
    })

  }

  onDelete(id:any){
    this.service.deletData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }


}
