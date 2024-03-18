import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from 'src/app/common/constants/data';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-portfolio-user-basic-details',
  templateUrl: './portfolio-user-basic-details.component.html',
  styleUrls: ['./portfolio-user-basic-details.component.scss']
})
export class PortfolioUserBasicDetailsComponent {
  @Input() isMobile: boolean = false;
  @Output() scrollToContact = new EventEmitter();
  user: User;
  selectedText: string = '';
  isImageLoaded: boolean = false;

  isLetsTalkBtnFocused: boolean = false;
  isLinkedinBtnFocused: boolean = false;

  constructor(private dataService: DataService) {
    this.user = new User();
  }

  onBtnClick(type: string) {
    if (type == 'letsTalkBtn') {
      this.isLetsTalkBtnFocused = true;
      this.scrollToContact.emit();
      setTimeout(() => {
        this.isLetsTalkBtnFocused = false;
      }, 500);
    }
    else if (type == 'linedinBtn') {
      this.isLinkedinBtnFocused = true;
      setTimeout(() => {
        this.isLinkedinBtnFocused = false;
      }, 1000);
    }
  };

  onImageLoad() {
    this.isImageLoaded = true;
    this.dataService.setImageLoad(this.isImageLoaded);
  }
}
