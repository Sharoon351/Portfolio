import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-container',
  templateUrl: './portfolio-container.component.html',
  styleUrls: ['./portfolio-container.component.scss']
})
export class PortfolioContainerComponent {
  @Input() isMobile: boolean = false;

}
