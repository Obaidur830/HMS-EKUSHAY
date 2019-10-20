import { Component, OnInit } from '@angular/core';
import { EmployeeInformation } from 'src/app/config/interfaces/user.interface';
import { EmployeeService } from '../../service/employee.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeInformation: EmployeeInformation;
 // studentForm: FormGroup;
  departments = ['science', 'arts', 'commerce'];
  constructor(
    private employeeService: EmployeeService,
    //private departmentService: DepartmentService,
   // private fb: FormBuilder,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmployeeComponent>) { }



  ngOnInit() {
    //this.service.getEmployees();
   // this.makeStudentForm();
    //this.initializeFormGroup();
  }

  onClear() {
    this.employeeService.employeeForm.reset();
    this.employeeService.initializeFormGroup();
    this.notificationService.warn(':: clear employee successfully');
  }

  onSubmit() {
    if (this.employeeService.employeeForm.valid) {
      this.employeeInformation = {
        fullName: this.employeeService.employeeForm.value.fullName,
        email: this.employeeService.employeeForm.value.email,
        mobile: this.employeeService.employeeForm.value.mobile,
        city: this.employeeService.employeeForm.value.city,
        gender: this.employeeService.employeeForm.value.gender,
        department: this.employeeService.employeeForm.value.department,
        hireDate: this.employeeService.employeeForm.value.hireDate,
        isPermanent: this.employeeService.employeeForm.value.isPermanent
      };
      if (!this.employeeService.employeeForm.get('$key').value) {
        this.employeeService.insertEmployee(this.employeeInformation);
      } else {
        this.employeeService.updateEmployee(this.employeeInformation);
      }
      this.employeeService.employeeForm.reset();
      this.employeeService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }
  onClose() {
    this.employeeService.employeeForm.reset();
    this.employeeService.initializeFormGroup();
    this.dialogRef.close();
  }
}

