import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
export class ProjectCardComponent implements OnInit {
  @Input() imageUrl: String = '';
  @Input() imageDescrepiton: String = '';

  @Input() title: String = '';
  @Input() subtitle: String = '';

  @Input() tags: TagModel[] = [];

  @Input() gitUrl: String = '';
  @Input() deployUrl: String = '';

  @Input() type: String = '';

  imageHeight: number = 95;

  @ViewChild('cardImage') cardImage!: ElementRef;

  ngOnInit() {
    if (this.type === 'MOBILE') {
      this.imageHeight = 175;
    }
  }

  ngAfterViewInit() {
    if (this.type !== 'MOBILE') {
      this.cardImage.nativeElement.style.height = '95px';
    }
  }
}
