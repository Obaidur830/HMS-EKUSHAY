import { Component, OnInit, Input } from '@angular/core';
import { FileDetails } from 'src/app/config/interfaces/user.interface';
import { UploadFileService } from 'src/app/notice-board/service/upload-file.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.scss']
})
export class DetailsUploadComponent implements OnInit {

  @Input() eachFileDetails: FileDetails;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    // console.log(this.eachFileDetails);
  }

  deleteFileUpload(eachFileDetails: FileDetails) {
    this.uploadService.deleteFileUpload(eachFileDetails);
  }

}
