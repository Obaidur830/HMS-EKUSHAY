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

  ) { }

  employeeDetails: EmployeeInformation;
  employeeForm = new FormGroup({
    $key: new FormControl(null),
    employeeId: new FormControl('', Validators.required),
    fullName: new FormControl(''),
    nationality: new FormControl(''),
    religion: new FormControl(''),
    gender: new FormControl('Male'),
    dateOfBirth: new FormControl(''),
    district: new FormControl(''),
    subDistrict: new FormControl(''),
    union: new FormControl(''),
    postCode: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    jobTitle: new FormControl(''),
    department: new FormControl(''),
    joiningDate: new FormControl(''),
    isResidential: new FormControl(false),
    eventParticipation: new FormControl('')
  });


  initializeFormGroup() {
    this.employeeForm.setValue({
      $key: null,
      employeeId: '',
      fullName: '',
      nationality: '',
      religion: '',
      gender: 'Male',
      dateOfBirth: '',
      district: '',
      subDistrict: '',
      union: '',
      postCode: '',
      email: '',
      mobile: '',
      jobTitle: '',
      department: '',
      joiningDate: '',
      isResidential: false,
      eventParticipation: ''
    });
  }

  populateForm(employeeInformation) {
    // timestamp to date conversion successfully
    // console.log(new Date(studentInformation.hireDate.seconds * 1000));
    const employeeFormDetails = {
      ...employeeInformation,
      dateOfBirth: employeeInformation.dateOfBirth.seconds ? new Date(employeeInformation.dateOfBirth.seconds * 1000) : '',
      joiningDate: employeeInformation.joiningDate.seconds ? new Date(employeeInformation.joiningDate.seconds * 1000) : '',

    };

    this.employeeForm.setValue(employeeFormDetails);
  }

  setEmployeeDetails(employeeInformation) {
    // tslint:disable-next-line: max-line-length
    const employeeDetails = {
      ...employeeInformation,
      isResidential: employeeInformation.isResidential ? 'Residential' : 'Non-residential',
      // tslint:disable-next-line: max-line-length
      dateOfBirth: employeeInformation.dateOfBirth.seconds ? new Date(employeeInformation.dateOfBirth.seconds * 1000).toLocaleDateString() : 'Not provided',
      // tslint:disable-next-line: max-line-length
      joiningDate: employeeInformation.joiningDate.seconds ? new Date(employeeInformation.joiningDate.seconds * 1000).toLocaleDateString() : 'Not provided'

    };
    this.employeeDetails = employeeDetails;
  }
  getStudentDetails() {
    return this.employeeDetails;
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
