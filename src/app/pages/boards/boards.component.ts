import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBorderAll, faBorderTopLeft, faClock, faGear, faHomeUser, faStar, faSuitcase, faTableColumns, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BoardCardComponent } from "../../components/board-card/board-card.component";
import { BtnComponent } from "../../components/btn/btn.component";

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    BtnComponent,
    NavbarComponent,
    FontAwesomeModule,
    BoardCardComponent,
    BtnComponent
],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faGear = faGear;
  faTrello = faTrello;
  faTableColumn = faTableColumns;
  faBorderTopLeft = faBorderTopLeft;
  faHomeUser = faHomeUser;
  faStar = faStar;
  faClock = faClock;
  faUser = faUser;
  faBorderAll = faBorderAll;
  faSuitcase = faSuitcase;
}
