import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'addstudent',
    component:AddstudentComponent
  },
  {
    path:'edit/:id',
    component:EditstudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
