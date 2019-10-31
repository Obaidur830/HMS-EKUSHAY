import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DropzoneDirective } from '../shared/directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { RouterModule } from '@angular/router';
import { noticeBoardRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';



@NgModule({
  declarations: [ UploaderComponent, UploadTaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(noticeBoardRoutes)
  ]
})
export class NoticeBoardModule { }
