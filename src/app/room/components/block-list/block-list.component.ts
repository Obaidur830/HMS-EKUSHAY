import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockService } from '../../service/block.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private blockService: BlockService,
    private dialogService: DialogService

  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['blockName', 'location', 'numberOfRooms', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {

    this.blockService.getBlocks().subscribe(
      list => {
        const array = list.map(item => {
          return {
            $key: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;

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
    this.blockService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(BlockComponent, dialogConfig);
  }

  onEdit(row) {
   // this.studentService.makeStudentForm();
    this.blockService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    this.dialog.open(BlockComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete this record ?')) {
    // this.studentService.deleteStudent($key);
    // this.notificationService.warn('! Deleted successfully');
    // }

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.blockService.deleteBlock($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }
}
