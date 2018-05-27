import { Component, OnInit } from '@angular/core';
import {Student } from '../../../app/models/Student'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student : Student;
  
  constructor() {}
  
  ngOnInit() {

   this.student = {
     fname : "Niranjan",
     lname : "Murthy",
     age : 34,
     address : {
       street : "46 west parade",
       city : "Sydney",
       state : "NSW"
     }
    }
  
}
}

