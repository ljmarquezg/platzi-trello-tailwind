import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../../models/product.model";

export class DataSourceProduct extends DataSource<Product> {
    data: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    originalData: Product[] = [];

    init(products: Product[]): void {
        this.data.next(products);
        this.originalData = products;
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

    filter(query: string): void {
        const filtered: Product[] = this.originalData.filter((product: Product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.price.toString().includes(query) ||
            product.id.toString().includes(query)
        );
        console.log(filtered);
        this.data.next(filtered);
    }

    override connect(): Observable<Product[]> {
        return this.data;
    }

    override disconnect(collectionViewer: CollectionViewer): void {
        
    }

}