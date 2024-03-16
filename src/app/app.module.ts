import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { PreLoaderComponent } from './common/pre-loader/pre-loader.component';
import { PortfolioContainerComponent } from './portfolio-container/portfolio-container.component';
import { PortfolioHeaderComponent } from './portfolio-container/portfolio-header/portfolio-header.component';
import { PortfolioBodyComponent } from './portfolio-container/portfolio-body/portfolio-body.component';
import { PortfolioUserBasicDetailsComponent } from './portfolio-container/portfolio-body/portfolio-user-basic-details/portfolio-user-basic-details.component';
import { TypewriterDirective } from './common/directives/typewriter.directive';
import { PortfolioWhatIDoComponent } from './portfolio-container/portfolio-body/portfolio-what-ido/portfolio-what-ido.component';
import { TitleSectionComponent } from './common/title-section/title-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PreLoaderComponent,
    PortfolioContainerComponent,
    PortfolioHeaderComponent,
    PortfolioBodyComponent,
    PortfolioUserBasicDetailsComponent,
    TypewriterDirective,
    PortfolioWhatIDoComponent,
    TitleSectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
