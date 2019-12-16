import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { StudentService } from 'src/app/student/service/student.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-room-wise-student-list',
  templateUrl: './room-wise-student-list.component.html',
  styleUrls: ['./room-wise-student-list.component.scss']
})
export class RoomWiseStudentListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private studentService: StudentService,
    private dialogService: DialogService,
    private roomService: RoomService
    // private studentComponent: StudentComponent
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['roomNo', 'registrationNumber', 'fullName', 'gender', 'migration'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  hallRooms;

  ngOnInit() {

    this.studentService.getRoomWiseStudents().subscribe(
      list => {
        const array = list.map(item => {
          // let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.payload.doc.id,
           // departmentName,
            ...item.payload.doc.data(),
            // isResidential : item.payload.doc.get('isResidential') ? 'Residential' : 'Non-Residential'
          };
        });
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

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter(this.searchKey);
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }


  // onCreate() {
  //   // this.studentService.makeStudentForm();
  //   this.studentService.initializeFormGroup();
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '80%';
  //   this.dialog.open(StudentComponent, dialogConfig);
  // }


  // onViewDetails(row) {
  //   // this.studentService.getStudentDetails(row);
  //   this.studentService.setStudentDetails(row);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '80%';
  //   this.dialog.open(StudentDetailsComponent, dialogConfig);

  // }

  // onEdit(row) {
  //  // this.studentService.makeStudentForm();
  //   this.studentService.populateForm(row);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = '80%';
  //   this.dialog.open(StudentComponent, dialogConfig);
  // }

  // onDelete($key) {

  //   this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
  //   .afterClosed().subscribe(res => {
  //     if (res) {
  //       this.studentService.deleteStudent($key);
  //       this.notificationService.warn('! Deleted successfully');
  //     }
  //   });


  updateRoomNo(roomNo: string, element) {
    const studentInformation = {
      ...element,
      roomNo
    };
    this.studentService.updateStudent(studentInformation);
  }

}


