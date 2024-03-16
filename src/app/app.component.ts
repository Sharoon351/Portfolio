import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from './common/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  showPreLoaderSpinner: boolean = true;
  isMobile: boolean = false;

  constructor(private dataService: DataService) {
    this.checkIsMobile();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.checkIsMobile();
  }

  ngOnInit(): void {
    this.loadData();
  }

  checkIsMobile() {
    this.isMobile = this.dataService.isMobile();
  }

  loadData() {
    this.checkIsMobile();
    setTimeout(() => {
      this.showPreLoaderSpinner = false;
    }, 1000);
  }

}
