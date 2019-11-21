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
    fullName: new FormControl('', Validators.required),
    fathersName: new FormControl('', Validators.required),
    mothersName: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    religion: new FormControl(''),
    gender: new FormControl('1'),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    department: new FormControl(''),
    hireDate: new FormControl('', Validators.required),
    isPermanent: new FormControl(false),
    city: new FormControl(''),
    district: new FormControl(''),
    subDistrict: new FormControl(''),
    union: new FormControl(''),
    subject: new FormControl(''),
    classYearSemester: new FormControl('')
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
      isPermanent: false,
      city: '',
      district: '',
      subDistrict: '',
      union: '',
      subject: '',
      classYearSemester: ''
    });
  }

  populateForm(studentInformation) {
    // timestamp to date conversion successfully
    //console.log(new Date(studentInformation.hireDate.seconds * 1000));
    const studentFormDetails = {...studentInformation, hireDate: new Date(studentInformation.hireDate.seconds * 1000)};
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
