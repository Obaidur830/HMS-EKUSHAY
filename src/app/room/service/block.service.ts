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
    blockName: new FormControl('', Validators.required),
    location: new FormControl(''),
    numberOfRooms: new FormControl(''),
  });


  initializeFormGroup() {
    this.residentialBlockForm.setValue({
      $key: null,
      blockName: '',
      location: '',
      numberOfRooms: 0
    });
  }

  populateForm(residentialBlockInformation) {
    // tslint:disable-next-line: max-line-length
    // const residentialBlockFormDetails = {...residentialBlockInformation, hireDate: new Date(residentialBlockInformation.hireDate.seconds * 1000)};
    // this.residentialBlockForm.setValue(residentialBlockFormDetails);

    this.residentialBlockForm.setValue(residentialBlockInformation);
  }

  getBlocks() {
    return this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block).snapshotChanges();
  }

  insertBlock(residentialBlockInformation) {

    const blockCollection = this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block);
    blockCollection.doc(residentialBlockInformation.blockName).set(residentialBlockInformation);
  }

  updateBlock(residentialBlockInformation) {
    const blockCollection = this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block);
    blockCollection.doc(residentialBlockInformation.blockName).update(residentialBlockInformation);
  }

  deleteBlock($key: string) {
    const blockCollection = this.angularFirestore.collection<ResidentialBlockInformation>(Entities.Block);
    blockCollection.doc($key).delete();
  }
}
