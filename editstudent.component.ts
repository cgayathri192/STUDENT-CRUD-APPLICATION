import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.scss']
})
export class EditstudentComponent implements OnInit {
editStudentForm!:FormGroup
  constructor(private router:Router,private studentservice:StudentService,private fb:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editStudentForm = this.fb.group({
      name:[],
      email:[],
      mobile:[],
      registerno:[],
      fees:[]
    })
    console.log(this.route.snapshot.params['id'])
    this.studentservice.getStudentById(this.route.snapshot.params['id']).subscribe((res:any)=>{
      this.editStudentForm = this.fb.group({
        name:[res.name],
        email:[res.email],
        mobile:[res.mobile],
        registerno:[res.registerno],
        fees:[res.fees]
      })
    })
  }
  editStudent(){
    this.studentservice.updateStudent(this.route.snapshot.params['id'],this.editStudentForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/student'])
    })
  }

}
