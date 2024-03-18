import { Component } from '@angular/core';
import { User } from 'src/app/common/constants/data';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent {
  user: User;

  constructor() {
    this.user = new User()
  }
}
