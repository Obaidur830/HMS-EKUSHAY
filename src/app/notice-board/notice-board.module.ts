import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DropzoneDirective } from '../shared/directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { RouterModule } from '@angular/router';
import { noticeBoardRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DropzoneDirective } from '../dropzone.directive/dropzone.directive';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ UploaderComponent, UploadTaskComponent, DropzoneDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(noticeBoardRoutes)
  ]
})
export class NoticeBoardModule { }
