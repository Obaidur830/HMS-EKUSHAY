import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { LeaveInformation } from 'src/app/config/interfaces/user.interface';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {

  leaveInformation: LeaveInformation;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private leaveService: LeaveService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<LeaveApplicationComponent>) { }



  ngOnInit() {
  }
  onClear() {
    this.leaveService.leaveApplicationForm.reset();
    this.leaveService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.leaveService.leaveApplicationForm.valid) {
      this.leaveInformation = {
        fullName: this.leaveService.leaveApplicationForm.value.fullName,
        email: this.leaveService.leaveApplicationForm.value.email,
        mobile: this.leaveService.leaveApplicationForm.value.mobile,
        city: this.leaveService.leaveApplicationForm.value.city,
        gender: this.leaveService.leaveApplicationForm.value.gender,
        department: this.leaveService.leaveApplicationForm.value.department,
        hireDate: this.leaveService.leaveApplicationForm.value.hireDate,
        isPermanent: this.leaveService.leaveApplicationForm.value.isPermanent



     leaveType: this.leaveService.leaveApplicationForm.value.leaveType,
     startDate: this.leaveService.leaveApplicationForm.value.startDate ? this.leaveService.leaveApplicationForm.value.startDate : '',
     endDate: this.leaveService.leaveApplicationForm.value.endDate ? this.leaveService.leaveApplicationForm.value.endDate : '',
     reason: this.leaveService.leaveApplicationForm.value.reason,
     employeeId: 
     employeeName: 
     employeeDesignation: 
     numberOfdays: 
     approvalStatus: 
     appliedDate: 
     approvedBy: 


      };
      if (!this.leaveService.leaveApplicationForm.get('$key').value) {
        this.leaveService.insertLeave(this.leaveInformation);
      } else {
        this.leaveService.updateLeave(this.leaveInformation);
      }
      this.leaveService.leaveApplicationForm.reset();
      this.leaveService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.leaveService.leaveApplicationForm.reset();
    this.leaveService.initializeFormGroup();
    this.dialogRef.close();
  }

}
