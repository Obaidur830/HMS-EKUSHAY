import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { MatDialogRef } from '@angular/material';
import { EmployeeInformation } from 'src/app/config/interfaces/user.interface';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeDetailsComponent>) { }
    
  employeeDetails: EmployeeInformation;

  ngOnInit() {
    this.employeeDetails = this.employeeService.getStudentDetails();
    // console.log(this.studentDetails);
  }
  onClose() {
    this.dialogRef.close();
  }

}
