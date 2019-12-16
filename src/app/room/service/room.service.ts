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
    roomNo: new FormControl('', Validators.required),
    blockName: new FormControl('', Validators.required),
    capacity: new FormControl(''),
    responsibleTeacherName: new FormControl('')
  });


  initializeFormGroup() {
    this.residentialRoomForm.setValue({
      $key: null,
      roomNo: '',
      blockName: '',
      capacity: 0,
      responsibleTeacherName: ''
    });
  }

  populateForm(residentialRoomInformation) {
    // tslint:disable-next-line: max-line-length
    // const residentialRoomFormDetails = {...residentialRoomInformation, hireDate: new Date(residentialRoomInformation.hireDate.seconds * 1000)};
    // this.residentialRoomForm.setValue(residentialRoomFormDetails);
    this.residentialRoomForm.setValue(residentialRoomInformation);
  }

  getRooms() {
    return this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Room).snapshotChanges();
  }

  insertRoom(residentialRoomInformation) {

    const roomCollection = this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Room);
    roomCollection.doc(residentialRoomInformation.roomNo).set(residentialRoomInformation);
  }

  updateRoom(residentialRoomInformation) {
    const roomCollection = this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Room);
    roomCollection.doc(residentialRoomInformation.roomNo).update(residentialRoomInformation);
  }

  deleteRoom($key: string) {
    const roomCollection = this.angularFirestore.collection<ResidentialRoomInformation>(Entities.Room);
    roomCollection.doc($key).delete();
  }
}
