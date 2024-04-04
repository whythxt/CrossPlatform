import { Taxable } from 'C:/Users/Yurii/Documents/hell/university/3/Cross/lab1/src/app/interfacepage/interface/taxable';
import { Discountable } from 'C:/Users/Yurii/Documents/hell/university/3/Cross/lab1/src/app/interfacepage/interface/discountable';

export class Toy implements Discountable, Taxable {
    constructor(public name: string, public price: number, public manufacturer: string) {}

    play(): void {
        console.log(`This is ${this.name}`);
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`);
    }

    calculateDiscount(): number {
        const discounts = [30, 50];
        
        return discounts[Math.floor(Math.random() * discounts.length)];
    }

    calculateTax(): number {
        const taxRate = 0.10;

        const currentPrice = this.price;
        const tax = currentPrice * taxRate;

        return tax;
    }
}