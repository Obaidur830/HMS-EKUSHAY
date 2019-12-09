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
         assetId: this.assetService.assetForm.value.assetId,
         assetName: this.assetService.assetForm.value.assetName,
         category: this.assetService.assetForm.value.category,
         condition: this.assetService.assetForm.value.condition,
         location: this.assetService.assetForm.value.location,
         price: this.assetService.assetForm.value.price,
         quantity: this.assetService.assetForm.value.quantity,
         // dateOfPurchase: this.assetService.assetForm.value.dateOfPurchase,
         dateOfPurchase: this.assetService.assetForm.value.dateOfPurchase ? this.assetService.assetForm.value.dateOfPurchase : '',

         aboutAsset: this.assetService.assetForm.value.aboutAsset
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

