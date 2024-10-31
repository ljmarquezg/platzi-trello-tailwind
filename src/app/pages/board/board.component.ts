import { Component } from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-board",
  standalone: true,
  imports: [
    DragDropModule,
    CdkDrag,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    NavbarComponent,
  ],
  templateUrl: "./board.component.html",
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  todos: Todo[] = [
    {
      id: "1",
      title: "Drag and drop",
      completed: false,
    },
    {
      id: "2",
      title: "Take over world",
      completed: false,
    },
    {
      id: "3",
      title: "One more thing",
      completed: false,
    },
  ];

  doing: Todo[] = [
    {
      id: "4",
      title: "Testing",
      completed: false,
    },
    {
      id: "5",
      title: "Play video games",
      completed: false,
    },
  ];

  done: Todo[] = [
    {
      id: "6",
      title: "Finish Angular Screencast",
      completed: false,
    },
  ];

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
