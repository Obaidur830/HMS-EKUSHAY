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


  assetForm = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(''),
    hireDate: new FormControl('', Validators.required),
    isPermanent: new FormControl(false)
  });


  initializeFormGroup() {
    this.assetForm.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: '',
      hireDate: '',
      isPermanent: false
    });
  }

  populateForm(assetInformation) {
    const assetFormDetails = {...assetInformation, hireDate: new Date(assetInformation.hireDate.seconds * 1000)};
    this.assetForm.setValue(assetFormDetails);
  }

  getAssets() {
    return this.angularFirestore.collection<AssetInformation>(Entities.Asset).snapshotChanges();
  }

  insertAsset(assetInformation) {

    const assetCollection = this.angularFirestore.collection<AssetInformation>(Entities.Asset);
    assetCollection.doc(assetInformation.email).set(assetInformation);
  }

  updateAsset(assetInformation) {
    const assetCollection = this.angularFirestore.collection<AssetInformation>(Entities.Asset);
    assetCollection.doc(assetInformation.email).update(assetInformation);
  }

  deleteAsset($key: string) {
    const assetCollection = this.angularFirestore.collection<AssetInformation>(Entities.Asset);
    assetCollection.doc($key).delete();
  }
}
