import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AssetInformation } from 'src/app/config/interfaces/user.interface';
import { AssetService } from '../../service/asset.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  constructor(private assetService: AssetService,
    public dialogRef: MatDialogRef<AssetDetailsComponent>) { }
  assetDetails: AssetInformation;
  ngOnInit() {
    this.assetDetails = this.assetService.getAssetDetails();
    // console.log(this.studentDetails);
  }
  onClose() {
    this.dialogRef.close();
  }

}
