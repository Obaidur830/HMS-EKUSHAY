import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef, MatSelect } from '@angular/material';
import { StudentInformation } from 'src/app/config/interfaces/user.interface';
import { nationalities, classYearSemesters } from 'src/app/config/constants/defaultConstants';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, OnDestroy {
  studentInformation: StudentInformation;
  departments = ['science', 'arts', 'commerce'];
  religions = ['Islam', 'Christianity', 'Hinduism', 'Buddhism'];
  classYearSemesters = classYearSemesters;


  nationalities = nationalities;
  public nationalityFilterCntrl: FormControl = new FormControl();
  public filteredNationalities: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  @ViewChild('singleSelect') singleSelect: MatSelect;
  // tslint:disable-next-line: variable-name
  private _onDestroy = new Subject<void>();
  constructor(
    private studentService: StudentService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<StudentComponent>) { }



  ngOnInit() {
    this.studentService.studentForm.get('nationality').setValue(nationalities[14]);
    this.filteredNationalities.next(this.nationalities.slice());
    // listen for search field value changes
    this.nationalityFilterCntrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterNationalities();
      });
  }
  onClear() {
    this.studentService.studentForm.reset();
    this.studentService.initializeFormGroup();
    this.notificationService.warn(':: clear studentForm successfully');
  }

  onSubmit() {
    if (this.studentService.studentForm.valid) {
      this.studentInformation = {
        registrationNumber: this.studentService.studentForm.value.registrationNumber,
        fullName: this.studentService.studentForm.value.fullName,
        fathersName: this.studentService.studentForm.value.fathersName,
        mothersName: this.studentService.studentForm.value.mothersName,
        nationality: this.studentService.studentForm.value.nationality,
        religion: this.studentService.studentForm.value.religion,
        email: this.studentService.studentForm.value.email,
        mobile: this.studentService.studentForm.value.mobile,
        gender: this.studentService.studentForm.value.gender,
        dateOfBirth: this.studentService.studentForm.value.dateOfBirth,
        department: this.studentService.studentForm.value.department,
        hireDate: this.studentService.studentForm.value.hireDate,
        isPermanent: this.studentService.studentForm.value.isPermanent,
        city: this.studentService.studentForm.value.city,
        classYearSemester: this.studentService.studentForm.value.classYearSemester
      };
      if (!this.studentService.studentForm.get('$key').value) {
        this.studentService.insertStudent(this.studentInformation);
      } else {
        this.studentService.updateStudent(this.studentInformation);
      }
      this.studentService.studentForm.reset();
      this.studentService.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.studentService.studentForm.reset();
    this.studentService.initializeFormGroup();
    this.dialogRef.close();
  }


  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }


  private filterNationalities() {
    if (!this.nationalities) {
      return;
    }
    // get the search keyword
    let search = this.nationalityFilterCntrl.value;
    if (!search) {
      this.filteredNationalities.next(this.nationalities.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the nationality
    this.filteredNationalities.next(
      this.nationalities.filter(nation => nation.toLowerCase().indexOf(search) > -1)
    );
  }


}
