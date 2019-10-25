import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { StudentService } from 'src/app/student/service/student.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  // links = ['first', 'Second', 'Third'];
  // activeLink = this.links[0];
  // background = '';
  ngOnInit() { }
  // constructor(
  //   private dialog: MatDialog,
  //   private notificationService: NotificationService,
  //   private studentService: StudentService,
  //   private dialogService: DialogService
  //   // private studentComponent: StudentComponent
  // ) { }

  // listData: MatTableDataSource<any>;
  // displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'department', 'actions'];
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // searchKey: string;


  // ngOnInit() {

  //   this.studentService.getStudents().subscribe(
  //     list => {
  //       const array = list.map(item => {
  //         // let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
  //         return {
  //           $key: item.payload.doc.id,
  //          // departmentName,
  //           ...item.payload.doc.data()
  //         };
  //       });
  //       this.listData = new MatTableDataSource(array);
  //       this.listData.sort = this.sort;
  //       this.listData.paginator = this.paginator;
  //       this.listData.filterPredicate = (data, filter) => {
  //         return this.displayedColumns.some(ele => {
  //           return ele !== 'actions' && data[ele].toLowerCase().indexOf(filter) !== -1;
  //         });
  //       };
  //     });
  // }

  // onSearchClear() {
  //   this.searchKey = '';
  //   this.applyFilter();
  // }

  // applyFilter() {
  //   this.listData.filter = this.searchKey.trim().toLowerCase();
  // }


}
