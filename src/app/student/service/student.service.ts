import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { Entities } from 'src/app/config/enums/default.enum';
import { StudentInformation } from 'src/app/config/interfaces/user.interface';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})

export class StudentService {
  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,

  ) { }


  studentForm = new FormGroup({
    $key: new FormControl(null),
    registrationNumber: new FormControl('', Validators.required),
    fullName: new FormControl(''),
    fathersName: new FormControl(''),
    mothersName: new FormControl(''),
    nationality: new FormControl(''),
    religion: new FormControl(''),
    gender: new FormControl('1'),
    dateOfBirth: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    department: new FormControl(''),
    hireDate: new FormControl(''),
    isResidential: new FormControl(false),
    addmissionFeeStatus: new FormControl(''),
    residenceFeeStatus: new FormControl(''),
    comment: new FormControl(''),

    city: new FormControl(''),
    district: new FormControl(''),
    subDistrict: new FormControl(''),
    union: new FormControl(''),
    postCode: new FormControl(''),
    subject: new FormControl(''),
    classYearSemester: new FormControl(''),
    session: new FormControl(''),
    roll: new FormControl(''),
    cgpa: new FormControl(''),
    roomNo: new FormControl(''),
    roomApprovalStatus: new FormControl(''),
    reAddmissionYear: new FormControl(''),
    alumni: new FormControl('')



  });


  initializeFormGroup() {
    this.studentForm.setValue({
      $key: null,
      registrationNumber: '',
      fullName: '',
      fathersName: '',
      mothersName: '',
      nationality: '',
      religion: '',
      gender: '1',
      dateOfBirth: '',
      email: '',
      mobile: '',
      // gender: '1',
      department: '',
      hireDate: '',
      isResidential: false,
      addmissionFeeStatus: '',
      residenceFeeStatus: '',
      comment: '',
      city: '',
      district: '',
      subDistrict: '',
      union: '',
      postCode: '',
      subject: '',
      classYearSemester: '',
      session: '',
      roll: '',
      cgpa: '',
      roomNo: '',
      roomApprovalStatus: '',
      reAddmissionYear: '',
      alumni: ''
    });
  }

  populateForm(studentInformation) {
    // timestamp to date conversion successfully
    // console.log(new Date(studentInformation.hireDate.seconds * 1000));
    // tslint:disable-next-line: max-line-length
    const studentFormDetails = {...studentInformation, dateOfBirth: studentInformation.dateOfBirth.seconds ? new Date( studentInformation.dateOfBirth.seconds * 1000) : ''};
    this.studentForm.setValue(studentFormDetails);
  }

  getStudents() {

    return this.angularFirestore.collection<StudentInformation>(Entities.Student).snapshotChanges();
  }

  insertStudent(studentInformation) {

    const studentCollection = this.angularFirestore.collection<StudentInformation>(Entities.Student);
    studentCollection.doc(studentInformation.email).set(studentInformation);
  }

  updateStudent(studentInformation) {
    const studentCollection = this.angularFirestore.collection<StudentInformation>(Entities.Student);
    studentCollection.doc(studentInformation.email).update(studentInformation);
  }

  deleteStudent($key: string) {
    const studentCollection = this.angularFirestore.collection<StudentInformation>(Entities.Student);
    studentCollection.doc($key).delete();
  }

}
