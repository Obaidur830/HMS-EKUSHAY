import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveInformation } from 'src/app/config/interfaces/user.interface';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
  ) { }
  // public startDate;
  leaveDetails: LeaveInformation;
  leaveApplicationForm = new FormGroup({
     $key: new FormControl(null),
     leaveType: new FormControl(''),
     startDate: new FormControl('', Validators.required),
     endDate: new FormControl('', Validators.required),
     reason: new FormControl(''),
  });


  initializeFormGroup() {
    this.leaveApplicationForm.setValue({
      $key: null,
      leaveType: '',
      startDate: '',
      endDate: '',
      reason: '',
    });
  }

  // populateForm(leaveInformation) {
  //   // tslint:disable-next-line: max-line-length
  //   const leaveFormDetails = {...leaveInformation, hireDate: new Date(leaveInformation.hireDate.seconds * 1000)};
  //   this.leaveApplicationForm.setValue(leaveFormDetails);
  // }


  populateForm(leaveInformation) {
    console.log(leaveInformation.startDate.seconds);

    const leaveFormDetails = {
      $key: leaveInformation.$key,
      leaveType: leaveInformation.leaveType,
      startDate: leaveInformation.startDate,
      endDate: leaveInformation.endDate,
      reason: leaveInformation.reason
    };


    this.leaveApplicationForm.setValue(leaveFormDetails);
    // this.startDate = leaveFormDetails.startDate;
    // this.setLeaveDetails(leaveInformation);


  }

  setLeaveDetails(leaveInformation) {
    // tslint:disable-next-line: max-line-length
    const leaveDetails = {
      ...leaveInformation,
      startDate: leaveInformation.startDate.seconds ? new Date(leaveInformation.startDate.seconds * 1000).toLocaleDateString() : '',
      endDate: leaveInformation.endDate.seconds ? new Date(leaveInformation.endDate.seconds * 1000).toLocaleDateString() : '',

    };
    this.leaveDetails = leaveDetails;
  }
  getLeaveDetails() {
    return this.leaveDetails;
  }

  getAllLeaves() {
    return this.angularFirestore.collection<LeaveInformation>(Entities.Leave).snapshotChanges();
  }

  insertLeave(leaveInformation) {

    const leaveCollection = this.angularFirestore.collection<LeaveInformation>(Entities.Leave);
    leaveCollection.doc(leaveInformation.leaveType).set(leaveInformation);
  }

  updateLeave(leaveInformation) {
    const leaveCollection = this.angularFirestore.collection<LeaveInformation>(Entities.Leave);
    leaveCollection.doc(leaveInformation.leaveType).update(leaveInformation);
  }

  deleteLeave($key: string) {
    const leaveCollection = this.angularFirestore.collection<LeaveInformation>(Entities.Leave);
    leaveCollection.doc($key).delete();
  }
}
