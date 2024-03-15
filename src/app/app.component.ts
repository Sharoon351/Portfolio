import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  showPreLoaderSpinner: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showPreLoaderSpinner = false;
    }, 5000);
  }
}
