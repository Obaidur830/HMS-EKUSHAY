import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/accounting/service/transaction.service';
import { EmployeeService } from 'src/app/employee/service/employee.service';
import { StudentService } from 'src/app/student/service/student.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit {
  totalStudent;
  totalEmployee;
  totalIncome;
  totalExpense;
  constructor(
    // private s: StudentService,
    // private e: EmployeeService,
    // private i: TransactionService,
    // private ex: ExpenseService
  ) { }

  ngOnInit() {
    // this.studentService.getStudents().subscribe(
    //   list => {
    //     const array = list.map(item => {
    //       // let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
    //       return {
    //         $key: item.payload.doc.id,
    //        // departmentName,
    //         ...item.payload.doc.data()
    //       };
    //     });

    //   });



  }

}
