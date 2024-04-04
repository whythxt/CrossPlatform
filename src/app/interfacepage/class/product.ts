export abstract class Product {
    constructor(public name: string, public price: number, public expiryDate: Date) {}

    abstract calculateDiscount(): number;

    displayInfo(): void {
        console.log(`Name: ${this.name}, Price: ${this.price}, Expiry Date: ${this.expiryDate}`);
    }
}