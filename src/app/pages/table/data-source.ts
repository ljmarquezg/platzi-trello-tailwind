import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../../models/product.model";

export class DataSourceProduct extends DataSource<Product> {
    data: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    init(products: Product[]): void {
        this.data.next(products);
    }

    getTotal(): number {
        return this.data.getValue().map((product: Product) => product.price)
            .reduce((acc: number, price: number) => acc + price);
    }

    update(id: Product['id'], changes: Partial<Product>): void {
        const products: Product[] = this.data.getValue();
        const productIndex: number = products.findIndex((product: Product) => product.id === id);
        if(productIndex !== -1) {
            console.log(id, changes);
            products[productIndex] = {
                ...products[productIndex],
                ...changes,
            }
            this.data.next(products);
        }
    }
    override connect(): Observable<Product[]> {
        return this.data;
    }

    override disconnect(collectionViewer: CollectionViewer): void {
        
    }

}