import { Component, OnInit } from '@angular/core';
import { NotificationInformation } from 'src/app/config/interfaces/user.interface';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notificationInformation: NotificationInformation;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private notificationService: NotificationService,
    private sharedNotificationService: NotificationService,
    public dialogRef: MatDialogRef<NotificationComponent>) { }



  ngOnInit() {
  }
  onClear() {
    this.notificationService.notificationForm.reset();
    this.notificationService.initializeFormGroup();
    this.sharedNotificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.notificationService.residentialRoomForm.valid) {
      this.notificationInformation = {
        fullName: this.notificationService.residentialRoomForm.value.fullName,
        email: this.notificationService.residentialRoomForm.value.email,
        mobile: this.notificationService.residentialRoomForm.value.mobile,
        city: this.notificationService.residentialRoomForm.value.city,
        gender: this.notificationService.residentialRoomForm.value.gender,
        department: this.notificationService.residentialRoomForm.value.department,
        hireDate: this.notificationService.residentialRoomForm.value.hireDate,
        isPermanent: this.notificationService.residentialRoomForm.value.isPermanent
      };
      if (!this.notificationService.residentialRoomForm.get('$key').value) {
        this.notificationService.insertRoom(this.notificationInformation);
      } else {
        this.notificationService.updateRoom(this.notificationInformation);
      }
      this.notificationService.residentialRoomForm.reset();
      this.notificationService.initializeFormGroup();
      this.sharedNotificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.notificationService.residentialRoomForm.reset();
    this.notificationService.initializeFormGroup();
    this.dialogRef.close();
  }

}
