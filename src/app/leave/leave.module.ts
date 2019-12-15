import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LeaveListComponent } from './components/leave-list/leave-list.component';
import { LeaveApplicationComponent } from './components/leave-application/leave-application.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { leaveRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { LeaveService } from './services/leave.service';
import { LeaveDetailsComponent } from './components/leave-details/leave-details.component';

@NgModule({
  declarations: [LeaveListComponent, LeaveApplicationComponent, LeaveDetailsComponent],
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
    RouterModule.forChild(leaveRoutes)
  ],
  providers: [LeaveService, DatePipe],
  entryComponents: [LeaveApplicationComponent, LeaveDetailsComponent]
})
export class LeaveModule { }
