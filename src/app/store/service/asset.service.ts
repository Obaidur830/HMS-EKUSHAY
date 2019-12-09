import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssetInformation } from 'src/app/config/interfaces/user.interface';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
  ) { }
 
  assetDetails: AssetInformation;

  assetForm = new FormGroup({
    $key: new FormControl(null),
    assetId: new FormControl('', Validators.required),
    assetName: new FormControl(''),
    category: new FormControl(''),
    condition: new FormControl(''),
    dateOfPurchase: new FormControl(''),
    location: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
    aboutAsset: new FormControl('')
  });


  initializeFormGroup() {
    this.assetForm.setValue({
      $key: null,
      assetId: '',
      assetName: '',
      category: '',
      condition: '',
      dateOfPurchase: '',
      location: '',
      price: 0,
      quantity: 0,
      aboutAsset: ''
    });
  }

  populateForm(assetInformation) {
    // const assetFormDetails = {...assetInformation, dateOfPurchase: new Date(assetInformation.dateOfPurchase.seconds * 1000)};
    const assetFormDetails = {...assetInformation, dateOfPurchase: assetInformation.dateOfPurchase.seconds ? new Date( assetInformation.dateOfPurchase.seconds * 1000) : ''};

    this.assetForm.setValue(assetFormDetails);
  }


  setAssetDetails(assetInformation) {
    // tslint:disable-next-line: max-line-length
    const assetDetails = {...assetInformation,  dateOfPurchase: assetInformation.dateOfPurchase.seconds ? new Date( assetInformation.dateOfPurchase.seconds * 1000).toLocaleDateString() : 'Not provided'};
    this.assetDetails = assetDetails;
  }
  getAssetDetails() {
     return this.assetDetails;
  }

  getAssets() {
    return this.angularFirestore.collection<AssetInformation>(Entities.Asset).snapshotChanges();
  }

  insertAsset(assetInformation) {

    const assetCollection = this.angularFirestore.collection<AssetInformation>(Entities.Asset);
    assetCollection.doc(assetInformation.assetId).set(assetInformation);
  }

  updateAsset(assetInformation) {
    const assetCollection = this.angularFirestore.collection<AssetInformation>(Entities.Asset);
    assetCollection.doc(assetInformation.assetId).update(assetInformation);
  }

  deleteAsset($key: string) {
    const assetCollection = this.angularFirestore.collection<AssetInformation>(Entities.Asset);
    assetCollection.doc($key).delete();
  }
}
