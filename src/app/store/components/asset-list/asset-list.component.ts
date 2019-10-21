import { Component, OnInit, ViewChild } from '@angular/core';
import { AssetComponent } from '../asset/asset.component';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig, MatIcon } from '@angular/material';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { AssetService } from '../../service/asset.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private assetService: AssetService,
    private dialogService: DialogService
    // private studentComponent: StudentComponent
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'department', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {

    this.assetService.getAssets().subscribe(
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
    this.assetService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AssetComponent, dialogConfig);
  }

  onEdit(row) {
   // this.studentService.makeStudentForm();
    this.assetService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AssetComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete this record ?')) {
    // this.studentService.deleteStudent($key);
    // this.notificationService.warn('! Deleted successfully');
    // }

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.assetService.deleteAsset($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

}
