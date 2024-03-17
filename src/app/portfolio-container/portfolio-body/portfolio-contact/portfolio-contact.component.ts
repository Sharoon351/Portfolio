import { Component, Input } from '@angular/core';
import { User } from 'src/app/common/constants/data';

@Component({
  selector: 'app-portfolio-contact',
  templateUrl: './portfolio-contact.component.html',
  styleUrls: ['./portfolio-contact.component.scss']
})
export class PortfolioContactComponent {
  user: User;
  @Input() isMobile: boolean = false;
  
  constructor(){
    this.user = new User();
  }
}
