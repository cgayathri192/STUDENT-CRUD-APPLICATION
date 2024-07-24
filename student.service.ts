import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http:HttpClient) { }
  getStudent(){
    return this.http.get('http://localhost:3000/students')
  }
  deleteStudent(id:any){
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }
  addStudent(data:any){
    return this.http.post('http://localhost:3000/students',data)
  }
  updateStudent(id:any,data:any){
    return this.http.put(`http://localhost:3000/students/${id}`,data)
  }
  getStudentById(id:any){
    return this.http.get('http://localhost:3000/students',id)
  }
   
}
