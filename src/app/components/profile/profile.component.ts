import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    BtnComponent,
    OverlayModule,
    CommonModule
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isOpen = false;
}
