import { Component} from '@angular/core';
import { UploadFileService } from '../../service/upload-file.service';
import { FileUpload } from 'src/app/config/interfaces/user.interface';
import { FileUploadDialogComponent } from 'src/app/shared/components/file-upload-dialog/file-upload-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
  // isSubmitted: boolean;
  // formTemplate = new FormGroup({
  //   caption: new FormControl('', Validators.required),
  // });
  // selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  flag: boolean;
  constructor(private uploadService: UploadFileService,
              public dialog: MatDialog,
              private notificationService: NotificationService ) { }
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  // onDrop(files: FileList) {
  //   for (let i = 0; i < files.length; i++) {
  //     this.files.push(files.item(i));
  //   }
  // }
  // ngOnInit() { }
  onDrop(files: FileList) {
    // for (let i = 0; i < files.length; i++) {
    //   this.files.push(files.item(i));
    // }
    // this.selectedFiles = files;
    this.flag = false;
    this.files.push(files.item(0));
  }


  // ngOnInit() {
  //   this.resetForm();
  // }
  // onSubmit(formValue) {
  //   if (this.formTemplate.valid) {
  //     const selectFile: File = this.selectedFiles.item(0);
  //     this.selectedFiles = undefined;
  //    // this.currentFileUpload = new FileUpload(file);
  //     this.currentFileUpload = {
  //       key : '',
  //       name: '',
  //       url: '',
  //       file: selectFile,
  //    };
  //     this.uploadService.setFileToStorage(this.currentFileUpload, this.formTemplate.value.caption).subscribe(
  //       percentage => {
  //         this.percentage = Math.round(percentage);
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }
  // resetForm() {
  //   this.formTemplate.reset();
  //   this.formTemplate.setValue({
  //     caption: '',
  //   });
  //   this.isSubmitted = false;
  // }

  upload() {
    if (this.files.length) {
      const selectFile: File = this.files[0];
      this.files.pop();
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '40%';

      const dialogRef = this.dialog.open(FileUploadDialogComponent,
        dialogConfig);


      dialogRef.afterClosed().subscribe(
        val => {
          // console.log('Dialog output:', val);
          if (!val) {
            val = {
                fileDescription : '',
                publisherName: ''
            };
            // console.log(val);
          }
          // this.currentFileUpload = new FileUpload(file);
          this.currentFileUpload = {
            key: '',
            name: '',
            url: '',
            file: selectFile,
          };
          this.flag = true;
          this.uploadService.setFileToStorage(this.currentFileUpload, val).subscribe(
            percentage => {
              this.percentage = Math.round(percentage);
            },
            error => {
              console.log(error);
            }
          );

        });
    } else {
        this.notificationService.fileSelectionWarn('please select a file to upload');
    }
  }
}
