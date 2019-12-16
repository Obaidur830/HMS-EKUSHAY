import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ResidentialStudentService } from '../../service/residential-student.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ResidenceStudentComponent } from '../residence-student/residence-student.component';
import { SeatApplicationService } from 'src/app/seat-application/services/seat-application.service';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { DatePipe } from '@angular/common';
import { approveStatus } from 'src/app/config/constants/defaultConstants';
import { LeaveDetailComponent } from 'src/app/notification/components/leave-detail/leave-detail.component';
import { SeatApplicationDetailComponent } from '../seat-application-detail/seat-application-detail.component';
import { RoomService } from '../../service/room.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { StudentService } from 'src/app/student/service/student.service';

@Component({
  selector: 'app-residence-student-list',
  templateUrl: './residence-student-list.component.html',
  styleUrls: ['./residence-student-list.component.scss']
})
export class ResidenceStudentListComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private seatApplicationService: SeatApplicationService,
    private dialogService: DialogService,
    private excelService: ExcelService,
    private datePipe: DatePipe,
    private roomService: RoomService,
    private studentService: StudentService
  ) { }
  totalNotification;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['registrationNumber', 'fullName',  'classYearSemester', 'roomApprovalStatus', 'roomNo', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  approveStatus = approveStatus;
  hallRooms;
  ngOnInit() {

    // ai jagay employee id onojai sob nia aste hobe
    this.seatApplicationService.getAllSeatApplications().subscribe(
      list => {
        const array = list.map(item => {
          return {
            $key: item.payload.doc.id,
            ...item.payload.doc.data(),
            // tslint:disable-next-line: max-line-length
            // startDate: new Date(item.payload.doc.get('startDate').seconds * 1000),
            // endDate: new Date(item.payload.doc.get('endDate').seconds * 1000),
             appliedDate: new Date(item.payload.doc.get('appliedDate').seconds * 1000),
            // tslint:disable-next-line: max-line-length
            // endDate: item.payload.doc.get('endDate').seconds ? new Date(item.payload.doc.get('endDate').seconds * 1000) : '',
            // tslint:disable-next-line: max-line-length
            // appliedDate: item.payload.doc.get('appliedDate').seconds ? new Date(item.payload.doc.get('appliedDate').seconds * 1000).toLocaleString() : '',
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

    this.roomService.getRooms().subscribe(
        list => {
          this.hallRooms = list.map(item => {
            return {
              $key: item.payload.doc.id,
              ...item.payload.doc.data()
            };
          });
        });
  }

  // onSearchClear() {
  //   this.searchKey = '';
  //   this.applyFilter();
  // }

  // applyFilter() {
  //   this.listData.filter = this.searchKey.trim().toLowerCase();
  // }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter(this.searchKey);
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }
  // onCreate() {
  //   // this.studentService.makeStudentForm();
  //   this.leaveService.initializeFormGroup();
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '60%';
  //   this.dialog.open(LeaveApplicationComponent, dialogConfig);
  // }

  onViewDetails(row) {
    // this.studentService.getStudentDetails(row);
    this.seatApplicationService.setSeatApplicationDetails(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(SeatApplicationDetailComponent, dialogConfig);

  }

  // onEdit(row) {
  //  // this.studentService.makeStudentForm();
  //   this.leaveService.populateForm(row);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '60%';
  //   this.dialog.open(LeaveApplicationComponent, dialogConfig);
  // }

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

  updateApproveStatus(status: string, element) {

    const seatApplicationInformation = {
      ...element,
      roomApprovalStatus: status
    };
    this.seatApplicationService.updateSeatApplication(seatApplicationInformation);
    this.studentService.updateStudentRoomApprovalStatus(seatApplicationInformation.registrationNumber, status);

  }

  updateRoomNo(roomNo: string, element) {
    const seatApplicationInformation = {
      ...element,
      roomNo
    };
    this.seatApplicationService.updateSeatApplication(seatApplicationInformation);
    this.studentService.updateStudentRoomNo(seatApplicationInformation.registrationNumber, roomNo);

  }
}
