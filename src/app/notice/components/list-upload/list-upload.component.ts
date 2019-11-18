import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadFileService } from 'src/app/notice-board/service/upload-file.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DatePipe } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {

  constructor(private uploadService: UploadFileService, private datePipe: DatePipe, private storage: AngularFireStorage) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'type', 'modified', 'noticeFor', 'publisherName', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;


  ngOnInit() {
    this.uploadService.getFileUploads(6).subscribe(
      list => {
         const fileUploadDetails = list.map(item => {
          return {
            key: item.payload.doc.id,
            //modifiedDate: new Date(item.payload.doc.get('modifiedDate').v.seconds * 1000),
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

  goPreviewURL(url) {
    // console.log(url, '_blank');
    window.open(url, '_blank', 'noopener');

  }
  goDownloadURL(url, fileName) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      /* Create a new Blob object using the response
      *  data of the onload object.
      */
      const blob = new Blob([xhr.response]);
      const a: any = document.createElement('a');
      a.style = 'display: none';
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    };
    xhr.open('GET', url);
    xhr.send();
  }

  // public downloadFile(): void {
  //   const storageRef = this.storage.ref('/uploads').child('/1573735295095_New Text Document.txt')
  //     .getDownloadURL();
  //     console.log(storageRef);
  //     //.then((url) => {
  //       const xhr = new XMLHttpRequest();
  //       xhr.responseType = 'blob';
  //       xhr.onload = (event) => {
  //         /* Create a new Blob object using the response
  //         *  data of the onload object.
  //         */
  //         const blob = new Blob([xhr.response], { type: 'text' });
  //         const a: any = document.createElement('a');
  //         a.style = 'display: none';
  //         document.body.appendChild(a);
  //         const url = window.URL.createObjectURL(blob);
  //         a.href = url;
  //         a.download = 'filename';
  //         a.click();
  //         window.URL.revokeObjectURL(url);
  //       };
  //       xhr.open('GET', url);
  //       xhr.send();
  //     }).catch( (error) => {
  //       // Handle any errors
  //       console.log(error);
  //     });
  // }
}
