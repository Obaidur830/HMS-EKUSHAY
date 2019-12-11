import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { TransactionInformation, SubCategory } from 'src/app/config/interfaces/user.interface';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef, MatSelect } from '@angular/material';
import { categories, subCategories, transactionTypes } from 'src/app/config/constants/defaultConstants';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  transactionInformation: TransactionInformation;
  transactionTypes = transactionTypes;
  categories = categories;
  categoryId: number;
  subCategories = subCategories;
  public filteredSubCategories: ReplaySubject<SubCategory[]> = new ReplaySubject<SubCategory[]>(1);
  @ViewChild('singleSelect') singleSelect: MatSelect;
  constructor(
    private transactionService: TransactionService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TransactionComponent>) { }



  ngOnInit() {
    this.filteredSubCategories.next(this.subCategories.slice());
  }

  onClear() {
    this.transactionService.transactionForm.reset();
    this.transactionService.initializeFormGroup();
    this.notificationService.warn(':: clear employee successfully');
  }

  onSubmit() {
    if (this.transactionService.transactionForm.valid) {
      this.transactionInformation = {
        transactionId:this.transactionService.transactionForm.value.transactionId,
        transactionType: this.transactionService.transactionForm.value.transactionType,
        categoryName: this.transactionService.transactionForm.value.categoryName,
        subCategoryName: this.transactionService.transactionForm.value.subCategoryName,
        amount: this.transactionService.transactionForm.value.amount,
        dateOfTransaction: this.transactionService.transactionForm.value.dateOfTransaction ? this.transactionService.transactionForm.value.dateOfTransaction : '',
        editDate: this.transactionService.transactionForm.value.editDate ? this.transactionService.transactionForm.value.editDate : '',
        comment: this.transactionService.transactionForm.value.comment,
        checkNo: this.transactionService.transactionForm.value.checkNo,
        // editedBy: ''
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


  setSubCategories(categoryId) {
   if (this.categoryId !== categoryId) {
      this.categoryId = categoryId;
      this.transactionService.transactionForm.get('subCategoryName').setValue('');
      this.filteredSubCategories.next(
        // tslint:disable-next-line: max-line-length
        this.subCategories.filter(category => category.parentCategoryId === categoryId)
        );
     }
  }

}
