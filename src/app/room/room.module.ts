import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RouterModule } from '@angular/router';
import { residenceRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../student/service/student.service';
import { DefaultResidencePageComponent } from './components/default-residence-page/default-residence-page.component';
import { ResidenceStudentListComponent } from './components/residence-student-list/residence-student-list.component';
import { BlockListComponent } from './components/block-list/block-list.component';

@NgModule({
  declarations: [RoomListComponent, DefaultResidencePageComponent, ResidenceStudentListComponent, BlockListComponent],
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
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forChild(residenceRoutes)
  ],
  providers: [StudentService, DatePipe],

})
export class RoomModule { }
