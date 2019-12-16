import { Component, OnInit } from '@angular/core';
import { SeatApplicationInformation } from 'src/app/config/interfaces/user.interface';
import { SeatApplicationService } from '../../services/seat-application.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { RootService } from 'src/app/root/services/root.service';

@Component({
  selector: 'app-seat-application',
  templateUrl: './seat-application.component.html',
  styleUrls: ['./seat-application.component.scss']
})
export class SeatApplicationComponent implements OnInit {

  seatApplicationInformation: SeatApplicationInformation;
  seatApplicationDetails: SeatApplicationInformation;
  today = new Date();
  constructor(
    private seatApplicationService: SeatApplicationService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<SeatApplicationComponent>,
    public rootService: RootService) { }



  ngOnInit() {
    this.seatApplicationDetails = this.seatApplicationService.getSeatApplicationDetails();
  }
  onClear() {
    this.seatApplicationService.seatApplicationForm.reset();
    this.seatApplicationService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.seatApplicationService.seatApplicationForm.valid) {
      this.seatApplicationInformation = {
        registrationNumber: this.rootService.studentInfo.registrationNumber,
        fullName: this.rootService.studentInfo.registrationNumber,
        subject: this.rootService.studentInfo.subject,
        classYearSemester: this.rootService.studentInfo.classYearSemester,
        session: this.rootService.studentInfo.session,
        cgpa: this.rootService.studentInfo.session,
        roll: this.rootService.studentInfo.roll,
        roomApprovalStatus: this.rootService.studentInfo.roomApprovalStatus ? this.rootService.studentInfo.roomApprovalStatus : 'Pending' ,
        roomNo: this.rootService.studentInfo.roomNo,
        reason: this.seatApplicationService.seatApplicationForm.value.reason,
        appliedDate: new Date(),
        approvedBy: '',
        monthlyIncome: this.seatApplicationService.seatApplicationForm.value.reason,
        presentAddress: this.seatApplicationService.seatApplicationForm.value.reason
      };
      if (!this.seatApplicationService.seatApplicationForm.get('$key').value) {
        this.seatApplicationService.insertSeatApplication(this.seatApplicationInformation);
      } else {
        this.seatApplicationService.updateSeatApplication(this.seatApplicationInformation);
      }
      this.seatApplicationService.seatApplicationForm.reset();
      this.seatApplicationService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.seatApplicationService.seatApplicationForm.reset();
    this.seatApplicationService.initializeFormGroup();
    this.dialogRef.close();
  }
}
