import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RouterModule } from '@angular/router';
import { residenceRoutes } from '../config/routes/lazyloadedRoutes.routes';

@NgModule({
  declarations: [RoomListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(residenceRoutes)
  ]
})
export class RoomModule { }
