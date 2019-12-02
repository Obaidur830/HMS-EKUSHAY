import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { EmployeeInformation, District } from 'src/app/config/interfaces/user.interface';
import { EmployeeService } from '../../service/employee.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { MatDialogRef, MatSelect } from '@angular/material';
import { districts, allSubjects, nationalities } from 'src/app/config/constants/defaultConstants';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { RootService } from 'src/app/root/services/root.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  employeeInformation: EmployeeInformation;
 // studentForm: FormGroup;
 //  departments = ['science', 'arts', 'commerce'];
  religions = ['Islam', 'Christianity', 'Hinduism', 'Buddhism'];

  districts = districts;
  public districtFilterCntrl: FormControl = new FormControl();
  public filteredDistricts: ReplaySubject<District[]> = new ReplaySubject<District[]>(1);
  districtCode: number;

  subDistrictCode: number;

  // unions = unions;
  // public filteredUnions: ReplaySubject<Union[]> = new ReplaySubject<Union[]>(1);

   departments = allSubjects;
  public subjectFilterCntrl: FormControl = new FormControl();
  public filteredDepartments: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  nationalities = nationalities;
  public nationalityFilterCntrl: FormControl = new FormControl();
  public filteredNationalities: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  @ViewChild('singleSelect') singleSelect: MatSelect;
  // tslint:disable-next-line: variable-name
  private _onDestroy = new Subject<void>();
  constructor(
    private employeeService: EmployeeService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<EmployeeComponent>,
    private rootService: RootService) { }



  ngOnInit() {

    this.employeeService.employeeForm.get('nationality').setValue(nationalities[14]);
    this.filteredNationalities.next(this.nationalities.slice());
    this.filteredDepartments.next(this.departments.slice());
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
        this.filterDepartments();
      });
    this.districtFilterCntrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDistricts();
      });
  }

  onClear() {
    this.employeeService.employeeForm.reset();
    this.employeeService.initializeFormGroup();
    this.notificationService.warn(':: clear employee successfully');
  }

  onSubmit() {
    if (this.employeeService.employeeForm.valid) {
      this.employeeInformation = {
        // fullName: this.employeeService.employeeForm.value.fullName,
        // email: this.employeeService.employeeForm.value.email,
        // mobile: this.employeeService.employeeForm.value.mobile,
        // // city: this.employeeService.employeeForm.value.city,
        // gender: this.employeeService.employeeForm.value.gender,
        // department: this.employeeService.employeeForm.value.department,
        // // hireDate: this.employeeService.employeeForm.value.hireDate,
        // isResidntial: this.employeeService.employeeForm.value.isPermanent
        id: this.employeeService.employeeForm.value.employeeId,
        fullName: this.employeeService.employeeForm.value.fullName ,
        nationality: this.employeeService.employeeForm.value.nationality,
        religion: this.employeeService.employeeForm.value.religion,
        gender: this.employeeService.employeeForm.value.gender,
        dateOfBirth: this.employeeService.employeeForm.value.dateOfBirth,
        district: this.employeeService.employeeForm.value.district,
        subDistrict: this.employeeService.employeeForm.value.subDistrict,
        union: this.employeeService.employeeForm.value.union,
        postCode: this.employeeService.employeeForm.value.postCode,
        email: this.employeeService.employeeForm.value.email,
        mobile: this.employeeService.employeeForm.value.mobile,
        jobTitle: this.employeeService.employeeForm.value.jobTitle,
        department: this.employeeService.employeeForm.value.department,
        joiningDate: this.employeeService.employeeForm.value.joiningDate,
        isResidntial: this.employeeService.employeeForm.value.isResidntial,
        eventParticipation: this.employeeService.employeeForm.value.eventParticipation
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
  private filterDepartments() {
    if (!this.departments) {
      return;
    }
    // get the search keyword
    let search = this.subjectFilterCntrl.value;
    if (!search) {
      this.filteredDepartments.next(this.departments.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the nationality
    this.filteredDepartments.next(
      this.departments.filter(subject => subject.toLowerCase().indexOf(search) > -1)
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
      this.employeeService.employeeForm.get('subDistrict').setValue('');
      this.employeeService.employeeForm.get('union').setValue('');
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
      this.employeeService.employeeForm.get('union').setValue('');
      // sob theke valo hoto jodi selected district er sob union district select er sathe next() kora jeto
      // this.studentService.studentForm.get('union').setValue('');
      this.rootService.filteredUnions.next(
        this.rootService.unions.filter(union => union.fields.sub_district === subDistrictCode)
        );
      // this.filteredUnions.next(this.unions.slice());
     }
  }
}

