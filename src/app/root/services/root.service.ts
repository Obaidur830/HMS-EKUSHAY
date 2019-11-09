import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RootService {
  $Username = new BehaviorSubject('');
  $ActiveLink = new BehaviorSubject('');
  $ActiveLinkInAccounting = new BehaviorSubject('');
  // $username= this.Username.asObservable();
  $menuIndex = new BehaviorSubject<number>(1);
  constructor() { }
}
