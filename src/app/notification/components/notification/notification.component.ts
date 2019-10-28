import { Component, OnInit } from '@angular/core';
import { NotificationInformation } from 'src/app/config/interfaces/user.interface';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { Notification_Service } from '../../service/notification_.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notificationInformation: NotificationInformation;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private notificationService: Notification_Service,
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
    if (this.notificationService.notificationForm.valid) {
      this.notificationInformation = {
        fullName: this.notificationService.notificationForm.value.fullName,
        email: this.notificationService.notificationForm.value.email,
        mobile: this.notificationService.notificationForm.value.mobile,
        city: this.notificationService.notificationForm.value.city,
        gender: this.notificationService.notificationForm.value.gender,
        department: this.notificationService.notificationForm.value.department,
        hireDate: this.notificationService.notificationForm.value.hireDate,
        isPermanent: this.notificationService.notificationForm.value.isPermanent
      };
      if (!this.notificationService.notificationForm.get('$key').value) {
        this.notificationService.insertNotification(this.notificationInformation);
      } else {
        this.notificationService.updateNotification(this.notificationInformation);
      }
      this.notificationService.notificationForm.reset();
      this.notificationService.initializeFormGroup();
      this.sharedNotificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.notificationService.notificationForm.reset();
    this.notificationService.initializeFormGroup();
    this.dialogRef.close();
  }

}
