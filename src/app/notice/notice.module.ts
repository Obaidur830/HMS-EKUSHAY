import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUploadComponent } from './components/list-upload/list-upload.component';
import { DetailsUploadComponent } from './components/details-upload/details-upload.component';
import { RouterModule } from '@angular/router';
import { noticeRoutes } from '../config/routes/lazyloadedRoutes.routes';
// tslint:disable-next-line: max-line-length
import { MatListModule, MatSortModule, MatPaginatorModule, MatTableModule, MatIconModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListUploadComponent, DetailsUploadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forChild(noticeRoutes)
  ]
})
export class NoticeModule { }
