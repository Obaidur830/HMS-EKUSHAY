import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TransactionService } from '../../service/transaction.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private transactionService: TransactionService,
    private dialogService: DialogService
    // private studentComponent: StudentComponent
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'department', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {

    this.transactionService.getTransactions().subscribe(
      list => {
        const array = list.map(item => {
          // let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.payload.doc.id,
           // departmentName,
            ...item.payload.doc.data()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele !== 'actions' && data[ele].toLowerCase().indexOf(filter) !== -1;
          });
        };
      });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate() {
    // this.studentService.makeStudentForm();
    this.transactionService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(TransactionComponent, dialogConfig);
  }

  onEdit(row) {
    this.transactionService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(TransactionComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete this record ?')) {
    // this.employeeService.deleteEmployee($key);
    // this.notificationService.warn('! Deleted successfully');
    // }this was local host confirm dialog//so comment out

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.transactionService.deleteTransaction($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }
}
