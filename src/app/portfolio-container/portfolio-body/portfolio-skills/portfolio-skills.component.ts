import { Component } from '@angular/core';
import { User } from 'src/app/common/constants/data';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent {
  user: User;

  constructor() {
    this.user = new User();
  }
}
