import { Component, OnInit } from '@angular/core';
import { ResidentialBlockInformation } from 'src/app/config/interfaces/user.interface';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BlockService } from '../../service/block.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  residentialBlockInformation: ResidentialBlockInformation;
  // departments = ['science', 'arts', 'commerce'];
  constructor(
    private blockService: BlockService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<BlockComponent>) { }



  ngOnInit() {
  }
  onClear() {
    this.blockService.residentialBlockForm.reset();
    this.blockService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.blockService.residentialBlockForm.valid) {
      this.residentialBlockInformation = {
        blockName: this.blockService.residentialBlockForm.value.blockName,
        location: this.blockService.residentialBlockForm.value.location,
        numberOfRooms: this.blockService.residentialBlockForm.value.numberOfRooms
      };
      if (!this.blockService.residentialBlockForm.get('$key').value) {
        this.blockService.insertBlock(this.residentialBlockInformation);
      } else {
        this.blockService.updateBlock(this.residentialBlockInformation);
      }
      this.blockService.residentialBlockForm.reset();
      this.blockService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.blockService.residentialBlockForm.reset();
    this.blockService.initializeFormGroup();
    this.dialogRef.close();
  }

}
