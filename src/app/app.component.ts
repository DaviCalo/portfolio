import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialLinksComponent } from './components/social-links-component/social-links-component.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SwitchProjectsComponent } from './components/switch-projects/switch-projects.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProjectModel } from './models/project.model';
import { PROJECTS } from './data/projects.data';
import { ExperienceModel } from './models/experience.model';
import { EXPERIENCE } from './data/experience.data';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, SocialLinksComponent, 
    NavigationComponent, ProjectCardComponent, 
    CommonModule, SwitchProjectsComponent,
    FilterPipe, ExperienceCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'angular-portifolio';

  projects: ProjectModel[] = PROJECTS;
  experiences: ExperienceModel[] = EXPERIENCE;

  filterValue: string = '';

  activerNavItem: number = 1;
  isNavigationScroll: boolean = true;

  onInputValueChange(value: string): void {
    this.filterValue = value;
  }

  @ViewChild('containerRight') containerRight!: ElementRef;
  @ViewChild('appNavigation') appNavigation!: ElementRef;

  @ViewChild('articleAboutMe') articleAboutMe!: ElementRef; 
  @ViewChild('articleProject') articleProject!: ElementRef;
  @ViewChild('articleexperience') articleExperience!: ElementRef;

  ngAfterViewInit(): void {
    if (this.containerRight) {
      this.containerRight.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    } else {
      console.error('containerRight is not defined');
    }
    this.onScroll();
  }

  onScroll(): void {
    if(this.isNavigationScroll) {
      const section1Top = this.articleAboutMe.nativeElement.offsetTop; 
      const section2Top = this.articleProject.nativeElement.offsetTop; 
      const section3Top = this.articleExperience.nativeElement.offsetTop; 

      const scrollPosition = this.containerRight.nativeElement.scrollTop + this.containerRight.nativeElement.clientHeight / 2;
      
      if(scrollPosition >= section1Top && scrollPosition < section2Top) {
        this.activerNavItem = 1;
      } else if(scrollPosition >= section2Top) {
        this.activerNavItem = 2;
      } else if(scrollPosition >= section3Top) {
        this.activerNavItem = 3;
      }
    }
  }

  onClickNavItem(item: number): void {
    this.activerNavItem = item;
  }

  onMouseEnterNavigation(): void {
    this.isNavigationScroll = false;
  }

  onMouseLeaveNavigation(): void {
    this.isNavigationScroll = true;
  }
}
