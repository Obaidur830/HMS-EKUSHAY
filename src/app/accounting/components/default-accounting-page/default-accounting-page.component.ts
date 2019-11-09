import { Component, OnInit } from '@angular/core';
import { accountingConstant } from 'src/app/config/constants/defaultConstants';
import { Router } from '@angular/router';
import { RootService } from 'src/app/root/services/root.service';

@Component({
  selector: 'app-default-accounting-page',
  templateUrl: './default-accounting-page.component.html',
  styleUrls: ['./default-accounting-page.component.scss']
})
export class DefaultAccountingPageComponent implements OnInit {

  links = accountingConstant;
  activeLink;
  constructor(
    private router: Router,
    private rootService: RootService
  ) { }

  ngOnInit() {
    this.rootService.$ActiveLinkInAccounting.subscribe(res => {
      this.activeLink = res;
    });
 }
 setActiveLink(currentActiveLink) {
    this.activeLink = currentActiveLink;
    // console.log(currentActiveLink);
    this.route('/accounting/' + currentActiveLink);
 }
  //  this.rootService.$Ac.subscribe(res => {
  //  // this.selectedRow = res;
  //  });
  // ngOnInit() {
  //   this.selectandSetActiveLink();
  // }
  // selectandSetActiveLink() {
  //   const currentUrl = this.router.url;
  //   console.log(currentUrl);
  //   this.activeLink = this.links[0].url;

  //   for (const i of this.links) {
  //     if (currentUrl === `/residence/${i.url}`) {
  //       this.activeLink = i.url;
  //       this.route(currentUrl);
  //       break;
  //     }
  //   }

  // }
  route(url) {
    this.router.navigateByUrl(url);
  }

}
