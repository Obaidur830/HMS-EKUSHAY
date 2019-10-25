import { Component, OnInit } from '@angular/core';
import { residentialConstant } from 'src/app/config/constants/defaultConstants';

@Component({
  selector: 'app-default-residence-page',
  templateUrl: './default-residence-page.component.html',
  styleUrls: ['./default-residence-page.component.scss']
})
export class DefaultResidencePageComponent implements OnInit {

  links = residentialConstant;
  activeLink = this.links[0].url;
  background = '';
  ngOnInit() { }

}
