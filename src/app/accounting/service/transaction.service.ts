import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entities } from 'src/app/config/enums/default.enum';
import { TransactionInformation } from 'src/app/config/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe
  ) { }


    transactionForm = new FormGroup({
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
    this.transactionForm.setValue({
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

  populateForm(transactionInformation) {
    // timestamp to date conversion successfully
    // console.log(new Date(studentInformation.hireDate.seconds * 1000));
    const transactionFormDetails = {...transactionInformation, hireDate: new Date(transactionInformation.hireDate.seconds * 1000)};
    this.transactionForm.setValue(transactionFormDetails);
  }

  getTransactions() {
    return this.angularFirestore.collection<TransactionInformation>(Entities.Transaction).snapshotChanges();
  }

  insertTransaction(transactionInformation) {

    const transactionCollection = this.angularFirestore.collection<TransactionInformation>(Entities.Transaction);
    transactionCollection.doc(transactionInformation.email).set(transactionInformation);
  }

  updateTransaction(transactionInformation) {
    const transactionCollection = this.angularFirestore.collection<TransactionInformation>(Entities.Transaction);
    transactionCollection.doc(transactionInformation.email).update(transactionInformation);
  }

  deleteTransaction($key: string) {
    const transactionCollection = this.angularFirestore.collection<TransactionInformation>(Entities.Transaction);
    transactionCollection.doc($key).delete();
  }
}
