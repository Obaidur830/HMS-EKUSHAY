import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { StudentService } from '../../service/student.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef, MatSelect } from '@angular/material';
import { StudentInformation, District, SubDistrict, Union } from 'src/app/config/interfaces/user.interface';
// tslint:disable-next-line: max-line-length
import { nationalities, classYearSemesters, allSubjects, districts, subDistricts, unions, feeStatuses } from 'src/app/config/constants/defaultConstants';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RootService } from 'src/app/root/services/root.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit, OnDestroy {
  studentInformation: StudentInformation;
  departments = ['science', 'arts', 'commerce'];
  religions = ['Islam', 'Christianity', 'Hinduism', 'Buddhism'];
  // tslint:disable-next-line: max-line-length
  years = ['2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17', '2017-18', '2018-19', '2019-20'];
  feeStatuses = feeStatuses;
  classYearSemesters = classYearSemesters;
  districts = districts;
  public districtFilterCntrl: FormControl = new FormControl();
  public filteredDistricts: ReplaySubject<District[]> = new ReplaySubject<District[]>(1);
  districtCode: number;


  subDistrictCode: number;

  // unions = unions;
  // public filteredUnions: ReplaySubject<Union[]> = new ReplaySubject<Union[]>(1);

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
    public dialogRef: MatDialogRef<StudentComponent>,
    private rootService: RootService) { }



  ngOnInit() {
    this.studentService.studentForm.get('nationality').setValue(nationalities[14]);
    this.filteredNationalities.next(this.nationalities.slice());
    this.filteredSubjects.next(this.allSubjects.slice());
    this.filteredDistricts.next(this.districts.slice());
    // this.filteredSubDistricts.next(this.subDistricts.slice());
    // this.filteredUnions.next(this.unions.slice());

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
        // tslint:disable-next-line: no-bitwise
        dateOfBirth: this.studentService.studentForm.value.dateOfBirth ? this.studentService.studentForm.value.dateOfBirth : '',
        department: this.studentService.studentForm.value.department,
        // hireDate: this.studentService.studentForm.value.hireDate,
        isResidential: this.studentService.studentForm.value.isResidential,
        addmissionFeeStatus: this.studentService.studentForm.value.addmissionFeeStatus,
        residenceFeeStatus: this.studentService.studentForm.value.residenceFeeStatus,
        comment: this.studentService.studentForm.value.comment,
        // city: this.studentService.studentForm.value.city,
        district: this.studentService.studentForm.value.district,
        subDistrict: this.studentService.studentForm.value.subDistrict,
        union: this.studentService.studentForm.value.union,
        postCode: this.studentService.studentForm.value.postCode,
        subject: this.studentService.studentForm.value.subject,
        classYearSemester: this.studentService.studentForm.value.classYearSemester,
        session: this.studentService.studentForm.value.session,
        roll: this.studentService.studentForm.value.roll,
        cgpa: this.studentService.studentForm.value.cgpa,
        roomNo: this.studentService.studentForm.value.roomNo,
        roomApprovalStatus: this.studentService.studentForm.value.roomApprovalStatus,
        reAddmissionYear: this.studentService.studentForm.value.reAddmissionYear,
        alumni: this.studentService.studentForm.value.alumni



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
      this.rootService.filteredSubDistricts.next(
        // tslint:disable-next-line: max-line-length
        this.rootService.subDistricts.filter(subDistrict => subDistrict.fields.district === districtCode)
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
      this.rootService.filteredUnions.next(
        this.rootService.unions.filter(union => union.fields.sub_district === subDistrictCode)
        );
      // this.filteredUnions.next(this.unions.slice());
     }
  }

}
