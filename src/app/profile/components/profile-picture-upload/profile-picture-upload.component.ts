import { Component, OnInit } from '@angular/core';

import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { finalize, first } from 'rxjs/operators';
import { ProfileService } from '../../services/profile.service';
import { CustomerUserInformation } from 'src/app/config/interfaces/user.interface';
import { Entities } from 'src/app/config/enums/default.enum';
@Component({
	selector: 'app-profile-picture-upload',
	templateUrl: './profile-picture-upload.component.html',
	styleUrls: [ './profile-picture-upload.component.scss' ]
})
export class ProfilePictureUploadComponent implements OnInit {
	task: AngularFireUploadTask;
	percentage: Observable<number>;
	snapshot: Observable<any>;

	isHovering: boolean;
	imageChangedEvent: any = '';
	croppedImage: any = '';
	croppedImageFile: any = '';
	croppedProfilePicture: any = '';
	user: CustomerUserInformation;
	constructor(
		private storage: AngularFireStorage,
		public dialogRef: MatDialogRef<ProfilePictureUploadComponent>,
		 // tslint:disable-next-line: align
		 private profileService: ProfileService) {}

	toggleHover(event: boolean) {
		this.isHovering = event;
	}

	startUpload(event: FileList) {
		// const file = event.item(0)
		// // Client-side validation example
		// if (file.type.split('/')[0] !== 'image') {
		//   console.error('unsupported file type :( ')
		//   return;
		// }
		// const path = `test/${new Date().getTime()}_${file.name}`;
		// this.task = this.storage.upload(path, file);
		// this.percentage = this.task.percentageChanges();
		// this.snapshot   = this.task.snapshotChanges();
	}

	isActive(snapshot) {
		return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
	}

	fileChangeEvent(event: any): void {
		this.imageChangedEvent = event;
	}
	imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event.base64;
		// console.log(this.croppedImage);
		this.croppedImageFile = event.file;
		// console.log(this.croppedImage.slice(22));
		this.croppedProfilePicture = new File([this.croppedImageFile], 'test.jpg', {type: 'image/jpeg', lastModified: Date.now()});
	}
	imageLoaded() {
		// show cropper
	}
	cropperReady() {
		// cropper ready
	}
	loadImageFailed() {
		// show message
	}

	ngOnInit() {
		this.profileService.getProfileInformation().pipe(first()).subscribe((res) => {
			this.user = res;
		});
	}
	onNoClick(): void {
		this.dialogRef.close();
	}
    onSubmit() {
        
		if (this.croppedImage !== '') {
		  const filePath = `Profiles_Pictures/my/_${new Date().getTime()}`;
		  const fileRef = this.storage.ref(filePath);
		  this.storage.upload(filePath, this.croppedProfilePicture).snapshotChanges().pipe(
			finalize(() => {
			  fileRef.getDownloadURL().subscribe((url) => {
				this.user.photoURL = url;
				this.profileService.updateProfileInformation(Entities.Person, this.user.uid, this.user);
				this.onNoClick();
			  });
			})
		  ).subscribe();
		}
	  }
}
