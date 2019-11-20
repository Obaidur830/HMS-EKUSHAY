import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentInformation } from 'src/app/config/interfaces/user.interface';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class ResidentialStudentService {

  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
  ) { }


  residentialStudentForm = new FormGroup({
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
    classYearSemester: new FormControl('')
  });


  initializeFormGroup() {
    this.residentialStudentForm.setValue({
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
      classYearSemester: ''
    });
  }

  populateForm(residentialStudentInformation) {
    // tslint:disable-next-line: max-line-length
    const residentialStudentFormDetails = {...residentialStudentInformation, hireDate: new Date(residentialStudentInformation.hireDate.seconds * 1000)};
    this.residentialStudentForm.setValue(residentialStudentFormDetails);
  }

  getResidentialStudents() {
    return this.angularFirestore.collection<StudentInformation>(Entities.Student, ref=> ref.where
     ('mobile', '==', '01757151094') ).snapshotChanges();
  }

  insertResidentialStudent(residentialStudentInformation) {

    const residentialStudentCollection = this.angularFirestore.collection<StudentInformation>(Entities.Student);
    residentialStudentCollection.doc(residentialStudentInformation.email).set(residentialStudentInformation);
  }

  updateResidentialStudent(residentialStudentInformation) {
    const residentialStudentCollection = this.angularFirestore.collection<StudentInformation>(Entities.Student);
    residentialStudentCollection.doc(residentialStudentInformation.email).update(residentialStudentInformation);
  }

  deleteResidentialStudent($key: string) {
    const residentialStudentCollection = this.angularFirestore.collection<StudentInformation>(Entities.Student);
    residentialStudentCollection.doc($key).delete();
  }
}
