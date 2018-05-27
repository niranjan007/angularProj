import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/Student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students : Student[];
  enableAdd:boolean=true;

  constructor() { }

  ngOnInit() {

    this.students = [

      {
        fname : "Niranjan",
        lname : "Murthy",
        age : 34,
        address : {
          street : "46 west parade",
          city : "Sydney",
          state : "NSW"
        },
        image:'http://lorempixel.com/300/300/people/3'
       }, 

       {
        fname : "Shobha",
        lname : "Acharya",
        age : 29,
        address : {
          street : "46 Grade street",
          city : "Melbourne",
          state : "Queensland"
        },
        image:'http://lorempixel.com/300/300/people/2'
       },
       {
        fname : "Ved",
        lname : "Kumar",
        age : 36,
        address : {
          street : "2 AECS street",
          city : "Bangalore",
          state : "Karnataka"
        },
        image:'http://lorempixel.com/300/300/people/1'
       }

    ];

     this.addStudent({
      fname : "Suresh",
      lname : "khan",
      age : 38,
      address : {
        street : "1 AECS street",
        city : "Bangalore",
        state : "Karnataka"
      },
      image:'http://lorempixel.com/300/300/people/4'

     });

  }

addStudent(student:Student){
  this.students.push(student);
}
}
