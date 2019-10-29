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


  leaveApplicationForm = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(''),
    hireDate: new FormControl('', Validators.required),
    isPermanent: new FormControl(false)
  });


  initializeFormGroup() {
    this.leaveApplicationForm.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: '',
      hireDate: '',
      isPermanent: false
    });
  }

  populateForm(leaveInformation) {
    // tslint:disable-next-line: max-line-length
    const leaveFormDetails = {...leaveInformation, hireDate: new Date(leaveInformation.hireDate.seconds * 1000)};
    this.leaveApplicationForm.setValue(leaveFormDetails);
  }

  getAllLeaves() {
    return this.angularFirestore.collection<LeaveInformation>(Entities.Leave).snapshotChanges();
  }

  insertLeave(leaveInformation) {

    const leaveCollection = this.angularFirestore.collection<LeaveInformation>(Entities.Leave);
    leaveCollection.doc(leaveInformation.email).set(leaveInformation);
  }

  updateLeave(leaveInformation) {
    const leaveCollection = this.angularFirestore.collection<LeaveInformation>(Entities.Leave);
    leaveCollection.doc(leaveInformation.email).update(leaveInformation);
  }

  deleteLeave($key: string) {
    const leaveCollection = this.angularFirestore.collection<LeaveInformation>(Entities.Leave);
    leaveCollection.doc($key).delete();
  }
}
