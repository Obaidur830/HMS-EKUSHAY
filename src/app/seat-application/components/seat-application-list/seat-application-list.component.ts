import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SeatApplicationService } from '../../services/seat-application.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DatePipe } from '@angular/common';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { SeatApplicationComponent } from '../seat-application/seat-application.component';
import { SeatApplicationDetailsComponent } from '../seat-application-details/seat-application-details.component';

@Component({
  selector: 'app-seat-application-list',
  templateUrl: './seat-application-list.component.html',
  styleUrls: ['./seat-application-list.component.scss']
})
export class SeatApplicationListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private seatApplicationService: SeatApplicationService,
    private dialogService: DialogService,
    private excelService: ExcelService,
    private datePipe: DatePipe
  ) { }
  totalNotification;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['registrationNumber', 'fullName', 'session', 'classYearSemester', 'roomApprovalStatus', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {

    // ai jagay employee id onojai sob nia aste hobe
    this.seatApplicationService.getAllSeatApplications().subscribe(
      list => {
        const array = list.map(item => {
          return {
            $key: item.payload.doc.id,
           ...item.payload.doc.data(),
           appliedDate: new Date(item.payload.doc.get('appliedDate').seconds * 1000) ,

          };
        });
        this.totalNotification = array.length;
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        // this.listData.filterPredicate = (data, filter) => {
        //   return this.displayedColumns.some(ele => {
        //     return ele !== 'actions' && data[ele].toLowerCase().indexOf(filter) !== -1;
        //   });
        // };
      });
  }

 
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter(this.searchKey);
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }
  onCreate() {
    // this.studentService.makeStudentForm();
    this.seatApplicationService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(SeatApplicationComponent, dialogConfig);
  }

  onViewDetails(row) {
    // this.studentService.getStudentDetails(row);
    this.seatApplicationService.setSeatApplicationDetails(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(SeatApplicationDetailsComponent, dialogConfig);

  }

  onEdit(row) {
   // this.studentService.makeStudentForm();
    this.seatApplicationService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(SeatApplicationComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete this record ?')) {
    // this.studentService.deleteStudent($key);
    // this.notificationService.warn('! Deleted successfully');
    // }

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.seatApplicationService.deleteSeatApplication($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

  generateExcel() {
   this.excelService.exportAsExcelFile(this.listData.data, 'myfile');
  }


}
