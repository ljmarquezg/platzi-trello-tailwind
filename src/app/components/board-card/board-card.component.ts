import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ColorClass, ColorClassOptions } from '../../models/color.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-board-card',
  standalone: true,
  imports: [
    FontAwesomeModule,
    NgClass
  ],
  templateUrl: './board-card.component.html',
})
export class BoardCardComponent {
  @Input({required: true}) label: string = '';
  @Input() bgColor: ColorClassOptions = 'default';
  @Input() isStarred = false;
  @Input() img?: string;
  faStar = faStar;

  get bgColorClass() {
    return ColorClass[this.bgColor];
  }
}
