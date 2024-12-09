import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModel } from '../../models/tag.model';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '750ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class ProjectCardComponent {
  @Input() imageUrl: String = '';
  @Input() imageDescrepiton: String = '';

  @Input() title: String = '';
  @Input() subtitle: String = '';

  @Input() tags: TagModel[] = [];

  @Input() gitUrl: String = '';
  @Input() deployUrl: String = '';
}
