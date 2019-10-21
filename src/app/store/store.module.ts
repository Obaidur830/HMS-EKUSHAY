import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AssetListComponent } from './components/asset-list/asset-list.component';
import { AssetComponent } from './components/asset/asset.component';
import { assetRoutes } from '../config/routes/lazyloadedRoutes.routes';
import { AssetService } from './service/asset.service';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line: max-line-length
import { MatToolbarModule, MatButtonModule, MatRadioModule, MatTableModule, MatDialogModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSortModule, MatPaginatorModule, MatInputModule, MatBadgeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AssetListComponent, AssetComponent],
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
    RouterModule.forChild(assetRoutes)
  ],
  providers: [AssetService, DatePipe],
  entryComponents: [AssetComponent]
})
export class StoreModule { }
