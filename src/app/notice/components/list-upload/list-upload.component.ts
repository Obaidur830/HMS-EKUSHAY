import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/notice-board/service/upload-file.service';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {

  fileUploadDetails: any[];

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.uploadService.getFileUploads(6).subscribe(
      list => {
         this.fileUploadDetails = list.map(item => {
          return {
            key: item.payload.doc.id,
            ...item.payload.doc.data()
          };
        });
      });

  }
}
//     this.uploadService.getFileUploads(6).subscribe().pipe(
//       map(changes =>
//         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
//       )
//     ).subscribe(fileUploads => {
//       this.fileUploads = fileUploads;
//     });
//   }

// }
