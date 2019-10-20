import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { employeeRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { EmployeeService } from './service/employee.service';

@NgModule({
  declarations: [EmployeeComponent, EmployeeListComponent],
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
    RouterModule.forChild(employeeRoutes)
  ],
  providers: [EmployeeService, DatePipe],
  entryComponents: [EmployeeComponent]
})
export class EmployeeModule { }
