import { Component, OnInit } from '@angular/core';
import { residentialConstant } from 'src/app/config/constants/defaultConstants';
import { Router } from '@angular/router';
import { RootService } from 'src/app/root/services/root.service';

@Component({
  selector: 'app-default-residence-page',
  templateUrl: './default-residence-page.component.html',
  styleUrls: ['./default-residence-page.component.scss']
})
export class DefaultResidencePageComponent implements OnInit {

  links = residentialConstant;
  activeLink;
  constructor(
    private router: Router,
    private rootService: RootService
  ) { }

  ngOnInit() {
    this.rootService.$ActiveLink.subscribe(res => {
      this.activeLink = res;
    });
 }
 setActiveLink(currentActiveLink) {
    this.activeLink = currentActiveLink;
    // console.log(currentActiveLink);
    this.route('/residence/' + currentActiveLink);
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
