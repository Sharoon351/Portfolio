import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-body',
  templateUrl: './portfolio-body.component.html',
  styleUrls: ['./portfolio-body.component.scss']
})
export class PortfolioBodyComponent {
  @Input() isMobile: boolean = false
}
