import { Component, Input } from '@angular/core';
import { User } from 'src/app/common/constants/data';

@Component({
  selector: 'app-portfolio-user-basic-details',
  templateUrl: './portfolio-user-basic-details.component.html',
  styleUrls: ['./portfolio-user-basic-details.component.scss']
})
export class PortfolioUserBasicDetailsComponent {
  @Input() isMobile: boolean = false;
  user: User;
  selectedText: string = '';

  constructor() {
    this.user = new User();
  }
}
