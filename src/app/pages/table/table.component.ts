import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Product } from '../../models/product.model';
import { CurrencyPipe, JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CdkTableModule,
    CurrencyPipe,
    NgClass,
    NavbarComponent,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  private http = inject(HttpClient);
  products: Product[] = [];
  columns: string[] = ['id', 'title', 'price'];
  total: WritableSignal<number> = signal(0);

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (data) => {
        this.products = data;
        this.total.update(
          () => this.products.map((product: Product) => product.price)
          .reduce((acc: number, price: number) => acc + price)
        );
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
