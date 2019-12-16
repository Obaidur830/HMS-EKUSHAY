import { Component, OnInit } from '@angular/core';
import { ResidentialRoomInformation } from 'src/app/config/interfaces/user.interface';
import { RoomService } from '../../service/room.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { hallTeachers } from 'src/app/config/constants/defaultConstants';
import { BlockService } from '../../service/block.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  residentialRoomInformation: ResidentialRoomInformation;
 //  departments = ['science', 'arts', 'commerce'];
  blocks;
  hallTeachers = hallTeachers;
  constructor(
    private roomService: RoomService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<RoomComponent>,
    private blockService: BlockService) { }



  ngOnInit() {
    this.blockService.getBlocks().subscribe(
      list => {
        this.blocks = list.map(item => {
          return {
            $key: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
       console.log(this.blocks);
      });
  }
  onClear() {
    this.roomService.residentialRoomForm.reset();
    this.roomService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.roomService.residentialRoomForm.valid) {
      this.residentialRoomInformation = {
        // fullName: this.roomService.residentialRoomForm.value.fullName,
        // email: this.roomService.residentialRoomForm.value.email,
        // mobile: this.roomService.residentialRoomForm.value.mobile,
        // city: this.roomService.residentialRoomForm.value.city,
        // gender: this.roomService.residentialRoomForm.value.gender,
        // department: this.roomService.residentialRoomForm.value.department,
        // hireDate: this.roomService.residentialRoomForm.value.hireDate,
        // isPermanent: this.roomService.residentialRoomForm.value.isPermanent

        roomNo: this.roomService.residentialRoomForm.value.roomNo,
        blockName: this.roomService.residentialRoomForm.value.blockName,
        capacity: this.roomService.residentialRoomForm.value.capacity,
        responsibleTeacherName: this.roomService.residentialRoomForm.value.responsibleTeacherName

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
