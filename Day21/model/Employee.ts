export interface Employee{
    id:number,
    name:string,
    mobileno:string,
    emailid:string,
    salary:number,
    department:string,
    status:string,
    createdBy:string,
    ceratedDate:number,
    updatedBy:string,
    updatedDate:number,
    country:{
        cid:number,
        cname:string
    }
}