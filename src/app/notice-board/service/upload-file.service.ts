import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUpload, FileDetails } from 'src/app/config/interfaces/user.interface';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Entities } from 'src/app/config/enums/default.enum';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private basePath = '/uploads';

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  setFileToStorage(fileUpload: FileUpload, fileCaption: string): Observable<number> {
    const filePath = `${this.basePath}/${Date.now()}_${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        // storageRef.getMetadata().subscribe(d => {
        //         d.
        // });
        storageRef.getDownloadURL().subscribe(downloadURL => {
          // console.log('File available at', downloadURL);
          // fileUpload.url = downloadURL;
         // fileUpload.name = fileUpload.file.name;
        // name=fileUpload.file.type;
          // console.log(fileUpload.file);
          const fileDetails: FileDetails = {
            name: fileUpload.file.name,
            type: fileUpload.file.type,
            path: filePath,
            url: downloadURL,
            modifiedDate: Date.now(),
            caption: fileCaption
          };
          this.saveFileData(fileDetails);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileDetails) {
    this.db.collection<FileDetails>(Entities.Upload).add(fileDetails);
  }

  getFileUploads(numberItems) {
    return this.db.collection<FileDetails>(Entities.Upload, ref =>
      ref.limit(numberItems)).snapshotChanges();
  }

  deleteFileUpload(fileDetails: FileDetails) {
    // console.log(fileDetails.key);
    this.deleteFileDatabase(fileDetails.key);
    this.deleteFileStorage(fileDetails.path);
  }

  private deleteFileDatabase(key: string) {
    return this.db.collection<FileDetails>(Entities.Upload).doc(key).delete();
  }

  private deleteFileStorage(path: string) {
    const storageRef = this.storage.ref(path).delete();
    //storageRef.child(path).delete();
  }
}
