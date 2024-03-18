import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { PreLoaderComponent } from './common/components/pre-loader/pre-loader.component';
import { PortfolioContainerComponent } from './portfolio-container/portfolio-container.component';
import { PortfolioHeaderComponent } from './portfolio-container/portfolio-header/portfolio-header.component';
import { PortfolioBodyComponent } from './portfolio-container/portfolio-body/portfolio-body.component';
import { PortfolioUserBasicDetailsComponent } from './portfolio-container/portfolio-body/portfolio-user-basic-details/portfolio-user-basic-details.component';
import { TypewriterDirective } from './common/directives/typewriter.directive';
import { PortfolioWhatIDoComponent } from './portfolio-container/portfolio-body/portfolio-what-ido/portfolio-what-ido.component';
import { TitleSectionComponent } from './common/components/title-section/title-section.component';
import { PortfolioProjectsComponent } from './portfolio-container/portfolio-body/portfolio-projects/portfolio-projects.component';
import { ListItemComponent } from './common/components/list-item/list-item.component';
import { PortfolioContactComponent } from './portfolio-container/portfolio-body/portfolio-contact/portfolio-contact.component';
import { PortfolioSkillsComponent } from './portfolio-container/portfolio-body/portfolio-skills/portfolio-skills.component';

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
    PortfolioProjectsComponent,
    ListItemComponent,
    PortfolioContactComponent,
    PortfolioSkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
