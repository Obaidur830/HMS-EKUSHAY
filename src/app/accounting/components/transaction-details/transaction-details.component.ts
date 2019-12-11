import { Component, OnInit } from '@angular/core';
import { TransactionInformation } from 'src/app/config/interfaces/user.interface';
import { MatDialogRef } from '@angular/material';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  constructor(private transactionservice: TransactionService,
    public dialogRef: MatDialogRef<TransactionDetailsComponent>) { }
  transactionDetails: TransactionInformation;
  ngOnInit() {
    this.transactionDetails = this.transactionservice.getTransactionDetails();
    // console.log(this.studentDetails);
  }
  onClose() {
    this.dialogRef.close();
  }


}
