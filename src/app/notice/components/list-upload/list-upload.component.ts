import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileService } from 'src/app/notice-board/service/upload-file.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {

  constructor(private uploadService: UploadFileService) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'caption', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {
    this.uploadService.getFileUploads(6).subscribe(
      list => {
         const fileUploadDetails = list.map(item => {
          return {
            key: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
         this.listData = new MatTableDataSource(fileUploadDetails);
         this.listData.sort = this.sort;
         this.listData.paginator = this.paginator;
      });

  }
  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }
}
