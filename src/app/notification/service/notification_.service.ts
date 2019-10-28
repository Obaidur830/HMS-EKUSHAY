import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationInformation } from 'src/app/config/interfaces/user.interface';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private angularFirestore: AngularFirestore,
    private datePipe: DatePipe,
  ) { }


  notificationForm = new FormGroup({
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
    this.notificationForm.setValue({
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

  populateForm(notificationInformation) {
    // tslint:disable-next-line: max-line-length
    const notificationFormDetails = {...notificationInformation, hireDate: new Date(notificationInformation.hireDate.seconds * 1000)};
    this.notificationForm.setValue(notificationFormDetails);
  }

  getNotifications() {
    return this.angularFirestore.collection<NotificationInformation>(Entities.Notification).snapshotChanges();
  }

  insertNotification(notificationInformation) {

    const notificationCollection = this.angularFirestore.collection<NotificationInformation>(Entities.Notification);
    notificationCollection.doc(notificationInformation.email).set(notificationInformation);
  }

  updateNotification(notificationInformation) {
    const notificationCollection = this.angularFirestore.collection<NotificationInformation>(Entities.Notification);
    notificationCollection.doc(notificationInformation.email).update(notificationInformation);
  }

  deleteNotification($key: string) {
    const notificationCollection = this.angularFirestore.collection<NotificationInformation>(Entities.Notification);
    notificationCollection.doc($key).delete();
  }
}
