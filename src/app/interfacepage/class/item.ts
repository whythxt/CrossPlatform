import { Product } from './product';

export abstract class Item extends Product {
    constructor(name: string, price: number, expiryDate: Date, public category: string) {
        super(name, price, expiryDate);
    }

    override displayInfo(): void {
        super.displayInfo();
        console.log(`Category: ${this.category}`);
    }
}