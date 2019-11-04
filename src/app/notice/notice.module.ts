import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUploadComponent } from './components/list-upload/list-upload.component';
import { DetailsUploadComponent } from './components/details-upload/details-upload.component';
import { RouterModule } from '@angular/router';
import { noticeRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [ListUploadComponent, DetailsUploadComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule.forChild(noticeRoutes)
  ]
})
export class NoticeModule { }
