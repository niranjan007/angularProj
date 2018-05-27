export interface Student {
  fname:string;
  lname:string;
  age:number;
  address:{
    street:string,
    city:string,
    state:string
  }
  image?:string;
}