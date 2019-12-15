import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject, Subscription, observable, BehaviorSubject } from 'rxjs';
import { map, takeUntil, first } from 'rxjs/operators';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Router } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { defaultConst, residentialConstant, accountingConstant, toolbarButtons } from '../../config/constants/defaultConstants';
import { QueryDatabaseService } from '../../core/database-service/query-database.service';
import { Entities, Roles } from '../../config/enums/default.enum';
import { CustomerUserInformation } from '../../config/interfaces/user.interface';
import { SharedService } from '../../shared/services/shared.service';
import { RootService } from '../services/root.service';
import { SecurityService } from 'src/app/core/security-service/security.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
    isHandset$: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map((result) => result.matches));

    title: string;
    sidebar;
    Username: string;
    photoURL: string;
    // $username: Observable<any>;
    menuItems;
    toolbarButtons;
    selectedRow: number;
    selectedRowForButton: number;
    // tslint:disable-next-line: variable-name
    _unsubscribeAll: Subject<any>;

    // $menuIndex = this.menuIndex.asObservable();
    constructor(
        private breakpointObserver: BreakpointObserver,
        private aut: AuthenticationService,
        private router: Router,
        private corequery: QueryDatabaseService,
        private sharedService: SharedService,
        private rootService: RootService,
        private security: SecurityService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {
        this.initiateVariables();
        this.setUsername();
        this.rootService.setLeaveEmployee();
        this.rootService.initializeSubDistrict();
        this.rootService.intitializeUnion();
        // this.route(defaultConst.sidebar[1].url);

    }

    initiateVariables() {
        this.title = defaultConst.siteName.name;
        this.menuItems = defaultConst.menu;
        this.toolbarButtons = toolbarButtons;
        this.makeSideBar();

        this.rootService.$Username.subscribe((res) => {
            this.Username = res;
        });

        this.rootService.$menuIndex.subscribe(res => {
            this.selectedRow = res;
        });
    }

    makeSideBar() {
        this.security.isAdmin().pipe(first()).subscribe(res => {
            if (res) {
                this.sidebar = defaultConst.sidebar;
            } else {
                this.sidebar = defaultConst.sidebarforcustomersupplier;
            }
            this.checkAndSetRow();
        });


    }
    checkAndSetRow() {
        const currentUrl = this.router.url;
        if (currentUrl === '/residence') {
            this.rootService.$ActiveLink.next(residentialConstant[0].url);
        } else if (currentUrl === '/accounting') {
            this.rootService.$ActiveLinkInAccounting.next(accountingConstant[0].url);
        } else if (currentUrl === '/profile') {
            this.rootService.$menuIndex.next(-1);
            return;
        } else {
            let flag = true;
            // let cnt = 0;
            for (const link of residentialConstant) {
                if (currentUrl === '/residence/' + link.url) {
                    flag = false;
                    this.rootService.$ActiveLink.next(link.url);
                    if (this.setRowxxx('residence')) { return; }
                }
                // cnt++;
            }
            if (flag) {
                for (const link of accountingConstant) {
                    if (currentUrl === '/accounting/' + link.url) {
                        this.rootService.$ActiveLinkInAccounting.next(link.url);
                        if (this.setRowxxx('accounting')) { return; }
                    }
                    // cnt++;
                }
            }
        }
        let count = 0;
        for (const i of this.sidebar) {
            if (currentUrl === `/${i.url}`) {
                this.selectedRow = count;
                break;
            }
            count += 1;
        }

        let cont = 0;
        for (const i of this.toolbarButtons) {
            if (currentUrl === `/${i.url}`) {
                this.rootService.$menuIndex.next(-1);
                this.selectedRowForButton = cont;
                break;
            }
            cont += 1;
        }


    }
    setRowxxx(checkingRow) {
        let count = 0;
        for (const i of this.sidebar) {
            if (checkingRow === i.url) {
                this.selectedRow = count;
                return true;
            }
            count += 1;
        }
        return false;
    }
    setUsername() {
        this.corequery.getLoggedInUserID().pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
            if (res) {
                // tslint:disable-next-line: no-shadowed-variable
                this.getUserName(res).pipe(takeUntil(this._unsubscribeAll)).subscribe((res) => {
                    this.Username = res;
                    this.rootService.$Username.next(this.Username);
                });
                // here are code for picture upload imediately load/ although pipe((first)) dia niche akbar call dea ace
                this.corequery.getSingleUserForPhotoURL(res).subscribe(
                    list => {
                        const array = list.map(item => {
                            return {
                                photoURL: item.payload.doc.get('photoURL')
                            };
                        });
                        this.photoURL = array[0].photoURL;
                    });

            } else {
                this.Username = Roles.Anonymous;
                this.rootService.$Username.next(Roles.Anonymous);
            }
        });
    }

    getUserName(uid): Observable<any> {
        let personInfo: CustomerUserInformation;
        return new Observable((observer) => {
            this.corequery
                .getSingleData(Entities.Person, uid)
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((res) => {
                    personInfo = res;
                    this.photoURL = personInfo.photoURL;
                    observer.next(personInfo && personInfo.name ? personInfo.name : null);
                });
        });
    }

    logout() {
        this.aut.signOut();
        this.showLogoutSnackbar();
    }

    showLogoutSnackbar() {
        this.sharedService.openSnackBar({
            data: {
                message: 'Logged out successfully',
                isAccepted: true
            },
            duration: 3,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['default-snackbar']
        });
    }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
        this._unsubscribeAll.unsubscribe();
    }
    route(url) {
        this.router.navigateByUrl(url);
        if (url === defaultConst.menu.profile.url) {
            this.rootService.$menuIndex.next(-1);
            this.selectedRowForButton = -1;
        } else if (url === 'residence') {
            this.rootService.$ActiveLink.next(residentialConstant[0].url);
        } else if (url === 'accounting') {
            this.rootService.$ActiveLinkInAccounting.next(accountingConstant[0].url);
        } // else {
        //     let cont = 0;
        //     for (const i of this.toolbarButtons) {
        //       if (url === `/${i.url}`) {
        //         // this.rootService.$menuIndex.next(-1);
        //        // this.selectedRowForButton = cont;
        //         break;
        //       }
        //       cont += 1;
        //     }
        // }
    }
    selectRow(index) {
        this.selectedRow = index;
        this.selectedRowForButton = -1;

    }
    selectRowForButton(index) {
        this.selectedRow = -1;
        this.selectedRowForButton = index;

    }

}
