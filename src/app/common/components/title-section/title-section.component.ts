import { AfterViewInit, Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss']
})
export class TitleSectionComponent implements AfterViewInit {
  @Input() title = "";
  @Input() unfilledProgressBarColor = "";
  @Input() filledProgressBarColor = "";
  mainWidth: string = "90px";

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit(): void {
    this.dataService.getImageLoad().subscribe(res => {
        let titleElement = document.getElementsByClassName(this.title)[0] as HTMLElement;
        this.mainWidth = titleElement ? titleElement.offsetWidth + "px" : "90px";
    });
  };

}
