import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Entities } from 'src/app/config/enums/default.enum';
import { EmployeeInformation } from 'src/app/config/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
    //private fb: FormBuilder
  ) { }


    employeeForm = new FormGroup({
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
    this.employeeForm.setValue({
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

  populateForm(employeeInformation) {
    // timestamp to date conversion successfully
    // console.log(new Date(studentInformation.hireDate.seconds * 1000));
    const employeeFormDetails = {...employeeInformation, hireDate: new Date(employeeInformation.hireDate.seconds * 1000)};
    this.employeeForm.setValue(employeeFormDetails);
  }

  getEmployees() {
    return this.angularFirestore.collection<EmployeeInformation>(Entities.Employee).snapshotChanges();
  }

  insertEmployee(employeeInformation) {

    const employeeCollection = this.angularFirestore.collection<EmployeeInformation>(Entities.Employee);
    employeeCollection.doc(employeeInformation.email).set(employeeInformation);
  }

  updateEmployee(employeeInformation) {
    const employeeCollection = this.angularFirestore.collection<EmployeeInformation>(Entities.Employee);
    employeeCollection.doc(employeeInformation.email).update(employeeInformation);
  }

  deleteEmployee($key: string) {
    const employeeCollection = this.angularFirestore.collection<EmployeeInformation>(Entities.Employee);
    employeeCollection.doc($key).delete();
  }
}
