import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { unions, subDistricts } from 'src/app/config/constants/defaultConstants';
import { Union, SubDistrict } from 'src/app/config/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  $Username = new BehaviorSubject('');
  $ActiveLink = new BehaviorSubject('');
  $ActiveLinkInAccounting = new BehaviorSubject('');
  // $username= this.Username.asObservable();
  $menuIndex = new BehaviorSubject<number>(1);

  subDistricts = subDistricts;
  public filteredSubDistricts: ReplaySubject<SubDistrict[]> = new ReplaySubject<SubDistrict[]>(1);
  unions = unions;
  public filteredUnions: ReplaySubject<Union[]> = new ReplaySubject<Union[]>(1);

  public leaveEmployer = { employeeId: '123', employeeName: 'tahmid', designation: 'employee' };
  public filteredLeaveEmployee: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor() { }
  initializeSubDistrict() {
    this.filteredSubDistricts.next(this.subDistricts.slice());

  }
  intitializeUnion() {
    this.filteredUnions.next(this.unions.slice());
  }

  setLeaveEmployee() {
    this.filteredLeaveEmployee.next(this.leaveEmployer);
  }
}
