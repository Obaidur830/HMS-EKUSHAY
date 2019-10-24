import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { RouterModule } from '@angular/router';
import { notificationRoutes } from '../config/routes/lazyloadedRoutes.routes';

@NgModule({
  declarations: [NotificationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(notificationRoutes)
  ]
})
export class NotificationModule { }
