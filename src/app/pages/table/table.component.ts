import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { Product } from '../../models/product.model';
import { CurrencyPipe, JsonPipe, NgClass } from '@angular/common';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CdkTableModule,
    CurrencyPipe,
    NgClass,
    NavbarComponent,
    BtnComponent,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  private http = inject(HttpClient);
  dataSource: DataSourceProduct = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'actions'];
  total: WritableSignal<number> = signal(0);

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (data) => {
        this.dataSource.init(data);
        this.total.set(this.dataSource.getTotal());
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 90 });
  }

}
