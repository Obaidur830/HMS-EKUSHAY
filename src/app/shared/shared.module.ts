import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatProgressBarModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule } from '@angular/material';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SharedService } from './services/shared.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import { FileUploadDialogComponent } from './components/file-upload-dialog/file-upload-dialog.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component';

@NgModule({
  declarations: [SnackbarComponent,  MatConfirmDialogComponent, FileUploadDialogComponent, PdfGeneratorComponent],
  imports: [
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    InternationalPhoneNumberModule,
    NgxIntlTelInputModule,
    AngularFontAwesomeModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    InternationalPhoneNumberModule,
    NgxIntlTelInputModule,
    AngularFontAwesomeModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [SharedService],
  entryComponents: [SnackbarComponent, MatConfirmDialogComponent, FileUploadDialogComponent]
})
export class SharedModule { }
