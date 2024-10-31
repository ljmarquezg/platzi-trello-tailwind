import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { BtnComponent } from '../btn/btn.component';
import {faBell, faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    BtnComponent,
    ProfileComponent,
    OverlayModule,
    FontAwesomeModule,
    ProfileComponent
],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  isOpenBody = false;

  faBell = faBell;
  faSearch = faSearch;
}
