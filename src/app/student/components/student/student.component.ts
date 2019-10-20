import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { StudentInformation } from 'src/app/config/interfaces/user.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentInformation: StudentInformation;
 // studentForm: FormGroup;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private studentService: StudentService,
    //private departmentService: DepartmentService,
   // private fb: FormBuilder,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<StudentComponent>) { }



  ngOnInit() {
    //this.service.getEmployees();
   // this.makeStudentForm();
    //this.initializeFormGroup();
  }
  onClear() {
    this.studentService.studentForm.reset();
    this.studentService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.studentService.studentForm.valid) {
      this.studentInformation = {
        fullName: this.studentService.studentForm.value.fullName,
        email: this.studentService.studentForm.value.email,
        mobile: this.studentService.studentForm.value.mobile,
        city: this.studentService.studentForm.value.city,
        gender: this.studentService.studentForm.value.gender,
        department: this.studentService.studentForm.value.department,
        hireDate: this.studentService.studentForm.value.hireDate,
        isPermanent: this.studentService.studentForm.value.isPermanent
      };
      if (!this.studentService.studentForm.get('$key').value) {
        this.studentService.insertStudent(this.studentInformation);
      } else {
        this.studentService.updateStudent(this.studentInformation);
      }
      this.studentService.studentForm.reset();
      this.studentService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.studentService.studentForm.reset();
    this.studentService.initializeFormGroup();
    this.dialogRef.close();
  }


}
