import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';

@Component({
  selector: 'app-portfolio-body',
  templateUrl: './portfolio-body.component.html',
  styleUrls: ['./portfolio-body.component.scss']
})
export class PortfolioBodyComponent {
  @Input() isMobile: boolean = false
  @ViewChild("contactComponent", { static: true }) contactCompoent!: PortfolioContactComponent;

  scrollToContact() {
    this.contactCompoent.contactContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
