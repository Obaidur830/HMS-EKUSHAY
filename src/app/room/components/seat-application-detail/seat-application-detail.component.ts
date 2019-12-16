import { Component, OnInit } from '@angular/core';
import { SeatApplicationService } from 'src/app/seat-application/services/seat-application.service';
import { MatDialogRef } from '@angular/material';
import { SeatApplicationInformation } from 'src/app/config/interfaces/user.interface';

@Component({
  selector: 'app-seat-application-detail',
  templateUrl: './seat-application-detail.component.html',
  styleUrls: ['./seat-application-detail.component.scss']
})
export class SeatApplicationDetailComponent implements OnInit {


  constructor(private seatApplicationService: SeatApplicationService,
              public dialogRef: MatDialogRef<SeatApplicationDetailComponent>) { }

  seatApplicationDetails: SeatApplicationInformation;

  ngOnInit() {
    this.seatApplicationDetails = this.seatApplicationService.getSeatApplicationDetails();
    // console.log(this.studentDetails);
  }
  onClose() {
    this.dialogRef.close();
  }

}
