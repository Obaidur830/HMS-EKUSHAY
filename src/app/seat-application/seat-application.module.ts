import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { seatApplicationRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { SeatApplicationListComponent } from './components/seat-application-list/seat-application-list.component';
import { SeatApplicationComponent } from './components/seat-application/seat-application.component';
import { SeatApplicationDetailsComponent } from './components/seat-application-details/seat-application-details.component';
import { SeatApplicationService } from './services/seat-application.service';

@NgModule({
  declarations: [SeatApplicationListComponent, SeatApplicationComponent, SeatApplicationDetailsComponent],
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
    RouterModule.forChild(seatApplicationRoutes)
  ],
  providers: [SeatApplicationService, DatePipe],
  entryComponents: [SeatApplicationComponent, SeatApplicationDetailsComponent]
})
export class SeatApplicationModule { }
