import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../service/asset.service';
import { AssetInformation } from 'src/app/config/interfaces/user.interface';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  assetInformation: AssetInformation;
   departments = ['science', 'arts', 'commerce'];
   constructor(
     private assetService: AssetService,
     private notificationService: NotificationService,
     public dialogRef: MatDialogRef<AssetComponent>) { }

   ngOnInit() {

   }
   onClear() {
     this.assetService.assetForm.reset();
     this.assetService.initializeFormGroup();
     this.notificationService.warn(':: clear studentForm successfully');
   }

   onSubmit() {
     if (this.assetService.assetForm.valid) {
       this.assetInformation = {
         fullName: this.assetService.assetForm.value.fullName,
         email: this.assetService.assetForm.value.email,
         mobile: this.assetService.assetForm.value.mobile,
         city: this.assetService.assetForm.value.city,
         gender: this.assetService.assetForm.value.gender,
         department: this.assetService.assetForm.value.department,
         hireDate: this.assetService.assetForm.value.hireDate,
         isPermanent: this.assetService.assetForm.value.isPermanent
       };
       if (!this.assetService.assetForm.get('$key').value) {
         this.assetService.insertAsset(this.assetInformation);
       } else {
         this.assetService.updateAsset(this.assetInformation);
       }
       this.assetService.assetForm.reset();
       this.assetService.initializeFormGroup();
       this.notificationService.success(':: Submitted successfully');
       this.onClose();
     }
   }

   onClose() {
     this.assetService.assetForm.reset();
     this.assetService.initializeFormGroup();
     this.dialogRef.close();
   }

}
