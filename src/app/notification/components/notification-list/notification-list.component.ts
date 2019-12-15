import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Notification_Service } from '../../service/notification_.service';
import { NotificationComponent } from '../notification/notification.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NotificationListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private sharedNotificationService: NotificationService,
    private notificationService: Notification_Service,
    private dialogService: DialogService
    // private studentComponent: StudentComponent
  ) { }
  totalNotification;
  listData: MatTableDataSource<any>;
  columnsToDisplay: string[] = ['fullName', 'email', 'mobile', 'city', 'department', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {

    this.notificationService.getNotifications().subscribe(
      list => {
        const array = list.map(item => {
          // let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.payload.doc.id,
           // departmentName,
            ...item.payload.doc.data()
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
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    // this.studentService.makeStudentForm();
    this.notificationService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NotificationComponent, dialogConfig);
  }

  onEdit(row) {
   // this.studentService.makeStudentForm();
    this.notificationService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(NotificationComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete this record ?')) {
    // this.studentService.deleteStudent($key);
    // this.notificationService.warn('! Deleted successfully');
    // }

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.notificationService.deleteNotification($key);
        this.sharedNotificationService.warn('! Deleted successfully');
      }
    });
  }

}
