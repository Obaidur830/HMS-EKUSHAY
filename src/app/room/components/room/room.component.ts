import { Component, OnInit } from '@angular/core';
import { ResidentialRoomInformation } from 'src/app/config/interfaces/user.interface';
import { RoomService } from '../../service/room.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  residentialRoomInformation: ResidentialRoomInformation;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private roomService: RoomService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<RoomComponent>) { }



  ngOnInit() {
  }
  onClear() {
    this.roomService.residentialRoomForm.reset();
    this.roomService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.roomService.residentialRoomForm.valid) {
      this.residentialRoomInformation = {
        fullName: this.roomService.residentialRoomForm.value.fullName,
        email: this.roomService.residentialRoomForm.value.email,
        mobile: this.roomService.residentialRoomForm.value.mobile,
        city: this.roomService.residentialRoomForm.value.city,
        gender: this.roomService.residentialRoomForm.value.gender,
        department: this.roomService.residentialRoomForm.value.department,
        hireDate: this.roomService.residentialRoomForm.value.hireDate,
        isPermanent: this.roomService.residentialRoomForm.value.isPermanent
      };
      if (!this.roomService.residentialRoomForm.get('$key').value) {
        this.roomService.insertRoom(this.residentialRoomInformation);
      } else {
        this.roomService.updateRoom(this.residentialRoomInformation);
      }
      this.roomService.residentialRoomForm.reset();
      this.roomService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.roomService.residentialRoomForm.reset();
    this.roomService.initializeFormGroup();
    this.dialogRef.close();
  }

}
