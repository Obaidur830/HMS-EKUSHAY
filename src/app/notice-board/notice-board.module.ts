import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DropzoneDirective } from '../shared/directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { RouterModule } from '@angular/router';
import { noticeBoardRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DropzoneDirective } from '../dropzone.directive/dropzone.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadDialogComponent } from '../shared/components/file-upload-dialog/file-upload-dialog.component';
// tslint:disable-next-line: max-line-length
import { MatDialogModule, MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [ UploaderComponent, UploadTaskComponent, DropzoneDirective],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatBadgeModule,
    RouterModule.forChild(noticeBoardRoutes)
  ],
  entryComponents: []
})
export class NoticeBoardModule { }
