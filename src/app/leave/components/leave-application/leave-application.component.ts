import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { RootService } from 'src/app/root/services/root.service';
import { LeaveInformation } from 'src/app/config/interfaces/user.interface';
import { leaveTypes } from 'src/app/config/constants/defaultConstants';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent implements OnInit {

  leaveInformation: LeaveInformation;
  // departments = ['science', 'arts', 'commerce'];
  today = new Date();
  // startDate;
  leaveTypes = leaveTypes;
  numberOfDays = 0;
  // appliedDate: new Date();
  constructor(
    private leaveService: LeaveService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<LeaveApplicationComponent>,
    public rootService: RootService) { }



  ngOnInit() {
   // startDate = leaveService.
  }
  onClear() {
    this.leaveService.leaveApplicationForm.reset();
    this.leaveService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.leaveService.leaveApplicationForm.valid) {
      this.leaveInformation = {
        // leaveType: this.leaveService.leaveApplicationForm.value.leaveType,
        // startDate: this.leaveService.leaveApplicationForm.value.startDate ? this.leaveService.leaveApplicationForm.value.startDate : '',
        // endDate: this.leaveService.leaveApplicationForm.value.endDate ? this.leaveService.leaveApplicationForm.value.endDate : '',
        // reason: this.leaveService.leaveApplicationForm.value.reason,
        // employeeId: this.rootService.leaveEmployer.employeeId,
        // employeeName: this.rootService.leaveEmployer.employeeName,
        // employeeDesignation: this.rootService.leaveEmployer.designation,
        // numberOfDays: this.numberOfDays,
        // approvalStatus: 'pending',
        // appliedDate: new Date(),
        // approvedBy: '',

        leaveType: this.leaveService.leaveApplicationForm.value.leaveType,
        startDate: this.leaveService.leaveApplicationForm.value.startDate ? this.leaveService.leaveApplicationForm.value.startDate : '',
        endDate: this.leaveService.leaveApplicationForm.value.endDate ? this.leaveService.leaveApplicationForm.value.endDate : '',
        reason: this.leaveService.leaveApplicationForm.value.reason,
        employeeId: this.rootService.leaveEmployer.employeeId,
        employeeName: this.rootService.leaveEmployer.employeeName,
        employeeDesignation: this.rootService.leaveEmployer.designation,
        numberOfDays: this.numberOfDays,
        approvalStatus: 'pending',
        appliedDate: new Date(),
        approvedBy: '',
      };
      if (!this.leaveService.leaveApplicationForm.get('$key').value) {
        // debugger;
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
