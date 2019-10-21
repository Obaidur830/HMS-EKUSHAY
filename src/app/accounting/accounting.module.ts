import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { transactionRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { TransactionService } from './service/transaction.service';
import { DialogService } from '../shared/services/dialog.service';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TransactionListComponent, TransactionComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatBadgeModule,
    RouterModule.forChild(transactionRoutes)
  ],
  providers: [TransactionService, DialogService, DatePipe],
  entryComponents: [TransactionComponent]
})
export class AccountingModule { }
