import { JsonPipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ColorClass, ColorClassOptions } from '../../models/color.model';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [
    NgClass,
    JsonPipe
  ],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  @Input() color: ColorClassOptions = 'default';
  @Input() size?: 'lg' | 'md' |'sm' | 'xs';
  
  btnSize = {
    lg: 'px-6 py-3 text-lg',
    md: 'px-4 py-2 text-md',
    sm: 'px-3 py-1 text-sm',
    xs: 'px-2 py-1 text-xs'
  }

  get colors() {
    return ColorClass[this.color];
  }

  get sizes() {    
    if(this.size) {
      return this.btnSize[this.size];
    }
    return this.size
  }

  get classes() {
    const color = this.colors;
    const size = this.sizes;

    return color + ' ' + size;
  }
}
