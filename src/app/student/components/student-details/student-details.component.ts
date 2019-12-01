import { Component, OnInit } from '@angular/core';
import { StudentInformation } from 'src/app/config/interfaces/user.interface';
import { StudentService } from '../../service/student.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  constructor( private studentService: StudentService,
               public dialogRef: MatDialogRef<StudentDetailsComponent>) { }
  studentDetails: StudentInformation;
  ngOnInit() {
    this.studentDetails = this.studentService.getStudentDetails();
    debugger;
    console.log(this.studentDetails);
  }
  onClose() {
    this.dialogRef.close();
  }

}
