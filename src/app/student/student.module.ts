import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentManagementComponent } from './components/student-management/student-management.component';
import { RouterModule } from '@angular/router';
import { productRoutes, studentRoutes } from '../config/routes/lazyloadedRoutes.routes';

@NgModule({
  declarations: [StudentManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(studentRoutes)
  ]
})
export class StudentModule { }
