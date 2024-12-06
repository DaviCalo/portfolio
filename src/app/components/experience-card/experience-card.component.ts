import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModel } from '../../models/tag.model';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() companyURL: string = '';  

  @Input() startDate: string = '';
  @Input() endDate: string = '';

  @Input() title: string = '';
  @Input() description: string = '';

  @Input() tags: TagModel[] = [];
}
