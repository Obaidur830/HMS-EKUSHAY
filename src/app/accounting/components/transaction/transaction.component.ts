import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { TransactionInformation } from 'src/app/config/interfaces/user.interface';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionInformation: TransactionInformation;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private transactionService: TransactionService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TransactionComponent>) { }



  ngOnInit() {
  }

  onClear() {
    this.transactionService.transactionForm.reset();
    this.transactionService.initializeFormGroup();
    this.notificationService.warn(':: clear employee successfully');
  }

  onSubmit() {
    if (this.transactionService.transactionForm.valid) {
      this.transactionInformation = {
        fullName: this.transactionService.transactionForm.value.fullName,
        email: this.transactionService.transactionForm.value.email,
        mobile: this.transactionService.transactionForm.value.mobile,
        city: this.transactionService.transactionForm.value.city,
        gender: this.transactionService.transactionForm.value.gender,
        department: this.transactionService.transactionForm.value.department,
        hireDate: this.transactionService.transactionForm.value.hireDate,
        isPermanent: this.transactionService.transactionForm.value.isPermanent
      };
      if (!this.transactionService.transactionForm.get('$key').value) {
        this.transactionService.insertTransaction(this.transactionInformation);
      } else {
        this.transactionService.updateTransaction(this.transactionInformation);
      }
      this.transactionService.transactionForm.reset();
      this.transactionService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }
  onClose() {
    this.transactionService.transactionForm.reset();
    this.transactionService.initializeFormGroup();
    this.dialogRef.close();
  }

}
