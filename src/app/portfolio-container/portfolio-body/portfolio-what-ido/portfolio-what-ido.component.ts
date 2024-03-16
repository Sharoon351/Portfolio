import { Component, Input } from '@angular/core';
import { User } from 'src/app/common/constants/data';

@Component({
  selector: 'app-portfolio-what-ido',
  templateUrl: './portfolio-what-ido.component.html',
  styleUrls: ['./portfolio-what-ido.component.scss']
})
export class PortfolioWhatIDoComponent {
  @Input() isMobile: boolean = false;
  user: User;

  constructor(){
    this.user = new User();
  }

}
