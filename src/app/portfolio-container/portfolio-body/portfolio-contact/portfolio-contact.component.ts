import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/common/constants/data';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent {
  user: User;
  @Input() isMobile: boolean = false;
  @ViewChild("contactContainer") contactContainer !: ElementRef;
  
  constructor() {
    this.user = new User();
  }

}
