import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { accountingRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { TransactionService } from './service/transaction.service';
import { DialogService } from '../shared/services/dialog.service';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DefaultAccountingPageComponent } from './components/default-accounting-page/default-accounting-page.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ProtibedonListComponent } from './components/protibedon-list/protibedon-list.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [TransactionListComponent, TransactionComponent, DefaultAccountingPageComponent, ExpenseListComponent, ProtibedonListComponent, TransactionDetailsComponent],
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
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forChild(accountingRoutes)
  ],
  providers: [TransactionService, DialogService, DatePipe],
  entryComponents: [TransactionComponent, TransactionDetailsComponent]
})
export class AccountingModule { }
