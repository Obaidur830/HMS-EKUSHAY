import { Component, OnInit } from '@angular/core';
import { residentialConstant } from 'src/app/config/constants/defaultConstants';
import { Router } from '@angular/router';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-default-residence-page',
  templateUrl: './default-residence-page.component.html',
  styleUrls: ['./default-residence-page.component.scss']
})
export class DefaultResidencePageComponent implements OnInit {

  links = residentialConstant;
  activeLink;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.selectandSetActiveLink();
  }
  selectandSetActiveLink() {
    const currentUrl = this.router.url;
    console.log(currentUrl);
    // if (currentUrl === '/residence') {
    this.activeLink = this.links[0].url;
    //   this.route(`/residence/${this.links[0].url}`);
    // } else {
    for (const i of this.links) {
      if (currentUrl === `/residence/${i.url}`) {
        //console.log(`/residence/${i.url}`);
        this.activeLink = i.url;
        this.route(currentUrl);
        break;
      }
    }
    // }
  }
  route(url) {
    this.router.navigateByUrl(url);
  }
}
