import { Component, OnInit } from '@angular/core';
import { LeaveInformation } from 'src/app/config/interfaces/user.interface';
import { MatDialogRef } from '@angular/material';
import { LeaveService } from 'src/app/leave/services/leave.service';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.scss']
})
export class LeaveDetailComponent implements OnInit {
  constructor(private leaveService: LeaveService,
              public dialogRef: MatDialogRef<LeaveDetailComponent>) { }

leaveDetails: LeaveInformation;

ngOnInit() {
this.leaveDetails = this.leaveService.getLeaveDetails();
// console.log(this.studentDetails);
}
onClose() {
this.dialogRef.close();
}

}
