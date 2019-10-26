import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResidentialRoomInformation } from 'src/app/config/interfaces/user.interface';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
  ) { }


  residentialRoomForm = new FormGroup({
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
    this.residentialRoomForm.setValue({
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

  populateForm(residentialRoomInformation) {
    // tslint:disable-next-line: max-line-length
    const residentialRoomFormDetails = {...residentialRoomInformation, hireDate: new Date(residentialRoomInformation.hireDate.seconds * 1000)};
    this.residentialRoomForm.setValue(residentialRoomFormDetails);
  }

  getRooms() {
    return this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Block).snapshotChanges();
  }

  insertRoom(residentialRoomInformation) {

    const roomCollection = this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Block);
    roomCollection.doc(residentialRoomInformation.email).set(residentialRoomInformation);
  }

  updateRoom(residentialRoomInformation) {
    const roomCollection = this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Block);
    roomCollection.doc(residentialRoomInformation.email).update(residentialRoomInformation);
  }

  deleteRoom($key: string) {
    const roomCollection = this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Block);
    roomCollection.doc($key).delete();
  }
}
