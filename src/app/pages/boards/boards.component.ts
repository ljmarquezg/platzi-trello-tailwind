import { Component, signal, ViewChild, WritableSignal } from '@angular/core';
import {CdkAccordionItem, CdkAccordionModule} from '@angular/cdk/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faAngleUp, faBorderAll, faBorderTopLeft, faChevronDown, faChevronUp, faClock, faGear, faHeart, faHomeUser, faStar, faSuitcase, faTableColumns, faUser, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BoardCardComponent } from "../../components/board-card/board-card.component";
import { BtnComponent } from "../../components/btn/btn.component";

export interface ExpandStatus {
  visible: string;
  icon: IconDefinition;
}
@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CdkAccordionModule,
    CdkAccordionItem,
    BtnComponent,
    NavbarComponent,
    BoardCardComponent,
    BtnComponent
],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  @ViewChild(CdkAccordionItem) accordionItem!: CdkAccordionItem;

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
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faHeart = faHeart;
  faUsers = faUsers;

  expandDisplay = signal<string>('none');
  expandIcon = signal<IconDefinition>(faAngleDown);

  isExpanded(expanded: boolean): void {
    this.expandDisplay.set(expanded ? '' : 'none'), 
    this.expandIcon.set(expanded ? faAngleUp : faAngleDown);
  }

  ngOnChanges() {
    console.log(this.accordionItem);
  }
}
