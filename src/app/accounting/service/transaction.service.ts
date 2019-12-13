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

  transactionDetails: TransactionInformation;
  transactionForm = new FormGroup({
    $key: new FormControl(null),
    transactionId: new FormControl('', Validators.required),
    transactionType: new FormControl('', Validators.required),
    categoryName: new FormControl(''),
    subCategoryName: new FormControl(''),
    amount: new FormControl(''),
    dateOfTransaction: new FormControl(''),
    editDate: new FormControl(''),
    comment: new FormControl(''),
    checkNo: new FormControl(''),

  });


  initializeFormGroup() {
    this.transactionForm.setValue({
      $key: null,
      transactionId: '',
      transactionType: '',
      categoryName: '',
      subCategoryName: '',
      amount: '',
      dateOfTransaction: '',
      editDate: '',
      comment: '',
      checkNo: ''

    });
  }

  // populateForm(transactionInformation) {
  //   // timestamp to date conversion successfully
  //   // console.log(new Date(studentInformation.hireDate.seconds * 1000));
  //   // const transactionFormDetails = { ...transactionInformation, hireDate: new Date(transactionInformation.hireDate.seconds * 1000) };
  //   this.transactionForm.setValue(transactionFormDetails);
  // }


  populateForm(transactionInformation) {
    // timestamp to date conversion successfully
    // console.log(new Date(studentInformation.hireDate.seconds * 1000));
    const transactionFormDetails = {
      ...transactionInformation,
      dateOfTransaction: transactionInformation.dateOfTransaction.seconds ? new Date(transactionInformation.dateOfTransaction.seconds * 1000) : '',
      editDate: transactionInformation.editDate.seconds ? new Date(transactionInformation.editDate.seconds * 1000) : '',

    };

    this.transactionForm.setValue(transactionFormDetails);
  }

  setTransactionDetails(transactionInformation) {
    // tslint:disable-next-line: max-line-length
    const transactionDetails = {
      ...transactionInformation,
      // tslint:disable-next-line: max-line-length
      dateOfTransaction: transactionInformation.dateOfTransaction.seconds ? new Date(transactionInformation.dateOfTransaction.seconds * 1000).toLocaleDateString() : 'Not provided',
      // tslint:disable-next-line: max-line-length
      editDate: transactionInformation.editDate.seconds ? new Date(transactionInformation.editDate.seconds * 1000).toLocaleDateString() : 'Not provided'

    };
    this.transactionDetails = transactionDetails;
  }
  getTransactionDetails() {
    return this.transactionDetails;
  }


  getTransactions(transactionType: string) {
    return this.angularFirestore.collection<TransactionInformation>(Entities.Transaction, ref=> ref.where
      ('transactionType', '==', transactionType)).snapshotChanges();
  }

  getTransactionsForReport() {
    return this.angularFirestore.collection<TransactionInformation>(Entities.Transaction
      // (ref => ref
      //   .where('dueDate', '>', startDate)
      //   .where('dueDate', '<', endDate))
        ).snapshotChanges();
  }
  insertTransaction(transactionInformation) {

    const transactionCollection = this.angularFirestore.collection<TransactionInformation>(Entities.Transaction);
    transactionCollection.doc(transactionInformation.transactionId).set(transactionInformation);
  }

  updateTransaction(transactionInformation) {
    const transactionCollection = this.angularFirestore.collection<TransactionInformation>(Entities.Transaction);
    transactionCollection.doc(transactionInformation.transactionId).update(transactionInformation);
  }

  deleteTransaction($key: string) {
    const transactionCollection = this.angularFirestore.collection<TransactionInformation>(Entities.Transaction);
    transactionCollection.doc($key).delete();
  }
}
