import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { SeatApplicationInformation } from 'src/app/config/interfaces/user.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class SeatApplicationService {

  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
  ) { }
  // public startDate;
  seatApplicationDetails: SeatApplicationInformation;
  seatApplicationForm = new FormGroup({
    $key: new FormControl(null),
    reason: new FormControl(''),
    monthlyIncome: new FormControl(''),
    presentAddress: new FormControl(''),

  });


  initializeFormGroup() {
    this.seatApplicationForm.setValue({
      $key: null,
      reason: '',
      monthlyIncome: '',
      presentAddress: ''
    });
  }

  // populateForm(leaveInformation) {
  //   // tslint:disable-next-line: max-line-length
  //   const leaveFormDetails = {...leaveInformation, hireDate: new Date(leaveInformation.hireDate.seconds * 1000)};
  //   this.leaveApplicationForm.setValue(leaveFormDetails);
  // }


  populateForm(seatApplicationInformation) {
    // console.log(seatApplicationInformation.startDate.seconds);

    const seatapllicationFormDetails = {
      $key: seatApplicationInformation.$key,
      reason: seatApplicationInformation.reason,
      monthlyIncome: seatApplicationInformation.monthlyIncome,
      presentAddress: seatApplicationInformation.monthlyIncome,
    };


    this.seatApplicationForm.setValue(seatapllicationFormDetails);
    // this.startDate = leaveFormDetails.startDate;
    // this.setLeaveDetails(leaveInformation);
    this.seatApplicationDetails = seatApplicationInformation;

  }

  setSeatApplicationDetails(seatApplicationInformation) {
    // tslint:disable-next-line: max-line-length
    const seatApplicationDetails = {
      ...seatApplicationInformation,
      // startDate: leaveInformation.startDate.seconds ? new Date(leaveInformation.startDate.seconds * 1000).toLocaleDateString() : '',
      // endDate: leaveInformation.endDate.seconds ? new Date(leaveInformation.endDate.seconds * 1000).toLocaleDateString() : '',

    };
    this.seatApplicationDetails = seatApplicationDetails;
  }
  getSeatApplicationDetails() {
    return this.seatApplicationDetails;
  }

  getAllSeatApplications() {
    return this.angularFirestore.collection<SeatApplicationInformation>(Entities.SeatApplication).snapshotChanges();
  }

  insertSeatApplication(seatApplicationInformation) {

    const seatApplicationCollection = this.angularFirestore.collection<SeatApplicationInformation>(Entities.SeatApplication);
    seatApplicationCollection.doc(seatApplicationInformation.registrationNumber).set(seatApplicationInformation);
  }

  updateSeatApplication(seatApplicationInformation) {
    const seatApplicationCollection = this.angularFirestore.collection<SeatApplicationInformation>(Entities.SeatApplication);
    seatApplicationCollection.doc(seatApplicationInformation.registrationNumber).update(seatApplicationInformation);
  }

  deleteSeatApplication($key: string) {
    const seatApplicationCollection = this.angularFirestore.collection<SeatApplicationInformation>(Entities.SeatApplication);
    seatApplicationCollection.doc($key).delete();
  }
}
