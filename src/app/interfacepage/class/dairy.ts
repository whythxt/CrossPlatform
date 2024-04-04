import { Item } from './item';
import { Taxable } from 'C:/Users/Yurii/Documents/hell/university/3/Cross/lab1/src/app/interfacepage/interface/taxable';
import { Discountable } from 'C:/Users/Yurii/Documents/hell/university/3/Cross/lab1/src/app/interfacepage/interface/discountable';

export class Dairy extends Item implements Discountable, Taxable {
    constructor(name: string, price: number, expiryDate: Date, category: string, public fatContent: number) {
        super(name, price, expiryDate, category);
    }

    override displayInfo(): void {
        console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}, Fat: ${this.fatContent}`);
    }

    calculateDiscount(): number {
        const discounts = [20, 25];
        
        return discounts[Math.floor(Math.random() * discounts.length)];
    }

    calculateTax(): number {
        const taxRate = 0.20;

        const currentPrice = this.price;
        const tax = currentPrice * taxRate;

        return currentPrice + parseFloat(tax.toFixed(3));
    }

    getInfo(): string {
        return `Ціна на ${this.name} з вмістом жиру ${this.fatContent}%: ${this.price}.`;
    }
    
}