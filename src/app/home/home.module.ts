import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHomeComponent } from './components/default-home/default-home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { MatCardModule, MatGridListModule, MatMenuModule, MatIcon, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DefaultHomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
