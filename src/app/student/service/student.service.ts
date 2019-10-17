import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { Entities } from 'src/app/config/enums/default.enum';
import { StudentInformation } from 'src/app/config/interfaces/user.interface';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
    private fb: FormBuilder
  ) { }


  studentForm = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });


  initializeFormGroup() {
    this.studentForm.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: false
    });
  }

  populateForm(studentInformation) {
    //this.initializeFormGroup();
    this.studentForm.setValue(studentInformation);
  }

  getStudents() {
    return this.angularFirestore.collection('students').snapshotChanges();
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
