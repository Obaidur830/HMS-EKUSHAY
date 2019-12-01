import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './components/student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { studentRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatPaginatorModule, MatSortModule, MatInputModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatCheckboxModule, MatDialogModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { StudentService } from './service/student.service';
import { StudentComponent } from './components/student/student.component';
import {MatBadgeModule} from '@angular/material/badge';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
@NgModule({
  declarations: [StudentListComponent, StudentComponent, StudentDetailsComponent],
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
    NgxMatSelectSearchModule,
   RouterModule.forChild(studentRoutes)
  ],
  providers: [StudentService, DatePipe],
  entryComponents: [StudentComponent, StudentDetailsComponent]
})
export class StudentModule { }
