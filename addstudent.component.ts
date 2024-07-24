import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
addStudentForm!:FormGroup
  constructor(private router:Router,private studentservice:StudentService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addStudentForm = this.fb.group({
      name:[],
      email:[],
      mobile:[],
      registerno:[],
      fees:[],
    })

  }
  addStudent(){
    console.log(this.addStudentForm.value);
    this.studentservice.addStudent(this.addStudentForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/student'])
    })
  }

}
