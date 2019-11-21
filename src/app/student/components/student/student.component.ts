import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef, MatSelect } from '@angular/material';
import { StudentInformation, District, SubDistrict, Union } from 'src/app/config/interfaces/user.interface';
import { nationalities, classYearSemesters, allSubjects, districts, subDistricts, unions } from 'src/app/config/constants/defaultConstants';
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
  districts = districts;
  public districtFilterCntrl: FormControl = new FormControl();
  public filteredDistricts: ReplaySubject<District[]> = new ReplaySubject<District[]>(1);
  districtCode: number;

  subDistricts = subDistricts;
  public filteredSubDistricts: ReplaySubject<SubDistrict[]> = new ReplaySubject<SubDistrict[]>(1);
  subDistrictCode: number;

  unions = unions;
  public filteredUnions: ReplaySubject<Union[]> = new ReplaySubject<Union[]>(1);

  allSubjects = allSubjects;
  public subjectFilterCntrl: FormControl = new FormControl();
  public filteredSubjects: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

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
    this.filteredSubjects.next(this.allSubjects.slice());
    this.filteredDistricts.next(this.districts.slice());
    this.filteredSubDistricts.next(this.subDistricts.slice());
    this.filteredUnions.next(this.unions.slice());

    // listen for search field value changes
    this.nationalityFilterCntrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterNationalities();
      });
    // this.studentService.studentForm.get('nationality').setValue(nationalities[14]);
    // listen for search field value changes
    this.subjectFilterCntrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterSubjects();
      });
    this.districtFilterCntrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDistricts();
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
        district: this.studentService.studentForm.value.district,
        subDistrict: this.studentService.studentForm.value.subDistrict,
        union: this.studentService.studentForm.value.union,
        subject: this.studentService.studentForm.value.subject,
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
  private filterSubjects() {
    if (!this.allSubjects) {
      return;
    }
    // get the search keyword
    let search = this.subjectFilterCntrl.value;
    if (!search) {
      this.filteredSubjects.next(this.allSubjects.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the nationality
    this.filteredSubjects.next(
      this.allSubjects.filter(subject => subject.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterDistricts() {
    // console.log('fgd');
    if (!this.districts) {
      return;
    }
    // get the search keyword
    let search = this.districtFilterCntrl.value;
    if (!search) {
      this.filteredDistricts.next(this.districts.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the district
    this.filteredDistricts.next(
      this.districts.filter(district => district.fields.name.toLowerCase().indexOf(search) > -1)
    );
  }

  setSubDistrict(districtCode) {
    // console.log(n);
     if (this.districtCode !== districtCode) {
      this.districtCode = districtCode;
      this.studentService.studentForm.get('subDistrict').setValue('');
      this.studentService.studentForm.get('union').setValue('');
      this.filteredSubDistricts.next(
        // tslint:disable-next-line: max-line-length
        this.subDistricts.filter(subDistrict => subDistrict.fields.district === districtCode)
        );
      // sob theke valo hoto jodi selected district er sob union district select er sathe next() kora jeto

      // this.filteredUnions.next(this.unions.slice());
     }
  }

  setUnion(subDistrictCode) {
    // console.log(subDistrictCode);
    // console.log(n);
     if (this.subDistrictCode !== subDistrictCode) {
      this.subDistrictCode = subDistrictCode;
      this.studentService.studentForm.get('union').setValue('');
      // sob theke valo hoto jodi selected district er sob union district select er sathe next() kora jeto
      // this.studentService.studentForm.get('union').setValue('');
      this.filteredUnions.next(
        this.unions.filter(union => union.fields.sub_district === subDistrictCode)
        );
      // this.filteredUnions.next(this.unions.slice());
     }
  }

}
