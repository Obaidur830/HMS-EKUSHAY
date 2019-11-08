import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';



@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent implements OnInit  {

  form: FormGroup;
  description: string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<FileUploadDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data: any) {

      ///this.description = description;


      this.form = fb.group({
          description: ['' , Validators.required],
          category: ['' , Validators.required],
          releasedAt: [moment(), Validators.required],
          longDescription: ['', Validators.required]
      });

  }

  ngOnInit() {

  }


  save() {
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
