import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResidentialBlockInformation } from 'src/app/config/interfaces/user.interface';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
  ) { }


  residentialBlockForm = new FormGroup({
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
    this.residentialBlockForm.setValue({
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

  populateForm(residentialBlockInformation) {
    // tslint:disable-next-line: max-line-length
    const residentialBlockFormDetails = {...residentialBlockInformation, hireDate: new Date(residentialBlockInformation.hireDate.seconds * 1000)};
    this.residentialBlockForm.setValue(residentialBlockFormDetails);
  }

  getBlocks() {
    return this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block).snapshotChanges();
  }

  insertBlock(residentialBlockInformation) {

    const blockCollection = this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block);
    blockCollection.doc(residentialBlockInformation.email).set(residentialBlockInformation);
  }

  updateBlock(residentialBlockInformation) {
    const blockCollection = this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block);
    blockCollection.doc(residentialBlockInformation.email).update(residentialBlockInformation);
  }

  deleteBlock($key: string) {
    const blockCollection = this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block);
    blockCollection.doc($key).delete();
  }
}
