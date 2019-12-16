import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { RouterModule } from '@angular/router';
import { notificationRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { Notification_Service } from './service/notification_.service';
import { LeaveService } from '../leave/services/leave.service';
import { LeaveDetailComponent } from './components/leave-detail/leave-detail.component';

@NgModule({
  declarations: [NotificationListComponent, NotificationComponent, LeaveDetailComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatBadgeModule,
    RouterModule.forChild(notificationRoutes)
  ],
  providers: [LeaveService, DatePipe],
  entryComponents: [LeaveDetailComponent]
})
export class NotificationModule { }
