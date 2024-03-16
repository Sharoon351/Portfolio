import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { PreLoaderComponent } from './common/pre-loader/pre-loader.component';
import { PortfolioContainerComponent } from './portfolio-container/portfolio-container.component';
import { PortfolioHeaderComponent } from './portfolio-container/portfolio-header/portfolio-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PreLoaderComponent,
    PortfolioContainerComponent,
    PortfolioHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
