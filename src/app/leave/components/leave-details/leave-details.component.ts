import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { MatDialogRef } from '@angular/material';
import { LeaveInformation } from 'src/app/config/interfaces/user.interface';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {

  constructor(private leaveService: LeaveService,
    public dialogRef: MatDialogRef<LeaveDetailsComponent>) { }

  leaveDetails: LeaveInformation;

  ngOnInit() {
    this.leaveDetails = this.leaveService.getLeaveDetails();
    // console.log(this.studentDetails);
  }
  onClose() {
    this.dialogRef.close();
  }

}
