import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BoardComponent } from "../board/board.component";
import { HttpClient } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';

interface Product {
  id: string;
  name: string;
  title: number;
  images: string[];
}
@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [
    NavbarComponent,
    BoardComponent,
    ScrollingModule
],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {
  private http = inject(HttpClient);
  products: Product[] = [];
  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
