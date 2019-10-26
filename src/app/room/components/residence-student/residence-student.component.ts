import { Component, OnInit } from '@angular/core';
import { StudentInformation } from 'src/app/config/interfaces/user.interface';
import { ResidentialStudentService } from '../../service/residential-student.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-residence-student',
  templateUrl: './residence-student.component.html',
  styleUrls: ['./residence-student.component.scss']
})
export class ResidenceStudentComponent implements OnInit {

  residentialStudentInformation: StudentInformation;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private residentialStudentService: ResidentialStudentService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ResidenceStudentComponent>) { }



  ngOnInit() {
  }
  onClear() {
    this.residentialStudentService.residentialStudentForm.reset();
    this.residentialStudentService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.residentialStudentService.residentialStudentForm.valid) {
      this.residentialStudentInformation = {
        fullName: this.residentialStudentService.residentialStudentForm.value.fullName,
        email: this.residentialStudentService.residentialStudentForm.value.email,
        mobile: this.residentialStudentService.residentialStudentForm.value.mobile,
        city: this.residentialStudentService.residentialStudentForm.value.city,
        gender: this.residentialStudentService.residentialStudentForm.value.gender,
        department: this.residentialStudentService.residentialStudentForm.value.department,
        hireDate: this.residentialStudentService.residentialStudentForm.value.hireDate,
        isPermanent: this.residentialStudentService.residentialStudentForm.value.isPermanent
      };
      if (!this.residentialStudentService.residentialStudentForm.get('$key').value) {
        this.residentialStudentService.insertResidentialStudent(this.residentialStudentInformation);
      } else {
        this.residentialStudentService.updateResidentialStudent(this.residentialStudentInformation);
      }
      this.residentialStudentService.residentialStudentForm.reset();
      this.residentialStudentService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.residentialStudentService.residentialStudentForm.reset();
    this.residentialStudentService.initializeFormGroup();
    this.dialogRef.close();
  }

}
