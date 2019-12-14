import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { LeaveService } from '../../services/leave.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { LeaveApplicationComponent } from '../leave-application/leave-application.component';
import { ExcelService } from 'src/app/shared/services/excel.service';
// import { ExcelService } from 'src/app/shared/services/excel.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss']
})
export class LeaveListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private leaveService: LeaveService,
    private dialogService: DialogService,
    private excelService: ExcelService
    // private studentComponent: StudentComponent
  ) { }
  totalNotification;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['EmployeeId', 'employeeName', 'startDate', 'endDate', 'approvalStatus', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {


    // ai jagay employee id onojai sob nia aste hobe
    this.leaveService.getAllLeaves().subscribe(
      list => {
        const array = list.map(item => {
          return {
            $key: item.payload.doc.id,
           ...item.payload.doc.data(),
           startDate: item.payload.doc.get('startDate').seconds ? new Date(item.payload.doc.get('startDate').seconds * 1000) : '',
           endDate: item.payload.doc.get('endDate').seconds ? new Date(item.payload.doc.get('endDate').seconds * 1000) : '',
           appliedDate: item.payload.doc.get('appliedDate').seconds ? new Date(item.payload.doc.get('appliedDate').seconds * 1000) : '',
          };
        });
        this.totalNotification = array.length;
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
    this.leaveService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(LeaveApplicationComponent, dialogConfig);
  }

  onEdit(row) {
   // this.studentService.makeStudentForm();
    this.leaveService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(LeaveApplicationComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete this record ?')) {
    // this.studentService.deleteStudent($key);
    // this.notificationService.warn('! Deleted successfully');
    // }

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.leaveService.deleteLeave($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

  generateExcel() {
   this.excelService.exportAsExcelFile(this.listData.data, 'myfile');
  }

}
