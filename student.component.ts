import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
studentData = [] as any;
  constructor(private router:Router,private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudentData()
  }
  getStudentData(){
    return this.studentService.getStudent().subscribe((res)=>{
      this.studentData = res;
      console.log(res)
    })
  }
  deleteStudent(id:any){
    return this.studentService.deleteStudent(id).subscribe((res)=>{
      alert('delete');
      this.getStudentData()
    })
  }

}
