import { Component, OnInit } from '@angular/core';
import { SeatApplicationService } from '../../services/seat-application.service';
import { MatDialogRef } from '@angular/material';
import { SeatApplicationInformation } from 'src/app/config/interfaces/user.interface';

@Component({
  selector: 'app-seat-application-details',
  templateUrl: './seat-application-details.component.html',
  styleUrls: ['./seat-application-details.component.scss']
})
export class SeatApplicationDetailsComponent implements OnInit {

  constructor(private seatApplicationService: SeatApplicationService,
              public dialogRef: MatDialogRef<SeatApplicationDetailsComponent>) { }

  seatApplicationDetails: SeatApplicationInformation;

  ngOnInit() {
    this.seatApplicationDetails = this.seatApplicationService.getSeatApplicationDetails();
    // console.log(this.studentDetails);
  }
  onClose() {
    this.dialogRef.close();
  }

}
