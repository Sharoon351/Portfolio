import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss']
})
export class TitleSectionComponent implements OnInit, AfterViewInit {
  @Input() title = "";
  @Input() unfilledProgressBarColor = "";
  @Input() filledProgressBarColor = "";
  mainWidth: string = "";

  ngOnInit(): void {
  };

  ngAfterViewInit(): void {
    let titleElement = document.getElementsByClassName(this.title)[0] as HTMLElement;
    this.mainWidth = titleElement ? titleElement.offsetWidth + "px" : "90px";
  }
}
