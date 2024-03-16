import { Component, Input } from '@angular/core';
import { User } from 'src/app/common/constants/data';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent {
  @Input() isMobile: boolean = false;
  user: User;

  constructor(private dataService: DataService) {
    this.user = new User();
  }
  getFirstLetter(){
    return this.dataService.getFirstLetter(this.user.firstName);
  }
}
