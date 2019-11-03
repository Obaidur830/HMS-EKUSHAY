import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadFileService } from '../../service/upload-file.service';
import { FileUpload } from 'src/app/config/interfaces/user.interface';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  isSubmitted: boolean;
  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
  });
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(private uploadService: UploadFileService) { }
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    this.selectedFiles = files;
    // this.files.push(files.item(0));
  }


  ngOnInit() {
    this.resetForm();
  }
  onSubmit(formValue) {
    if (this.formTemplate.valid) {
      const selectFile: File = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
     // this.currentFileUpload = new FileUpload(file);
      this.currentFileUpload = {
        key : '',
        name: '',
        url: '',
        file: selectFile,
     };
      this.uploadService.setFileToStorage(this.currentFileUpload, this.formTemplate.value.caption).subscribe(
        percentage => {
          this.percentage = Math.round(percentage);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
    });
    this.isSubmitted = false;
  }
}
