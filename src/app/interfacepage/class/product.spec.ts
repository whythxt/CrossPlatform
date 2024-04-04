import { Toy } from './toy';
import { Product } from './product';
import { Item } from './item';
import { Dairy } from './dairy';

describe('Toy', () => {
    let toy: Toy;

    beforeEach(() => {
        toy = new Toy('Action Figure', 10, 'ToyCo');
    });

    it('should create a toy instance', () => {
        expect(toy).toBeTruthy();
    });

    it('should display toy info', () => {
        const spy = spyOn(console, 'log');
        toy.displayInfo();
        expect(spy).toHaveBeenCalledWith('Name: Action Figure, Price: 10, Manufacturer: ToyCo');
    });
});

describe('Product', () => {
    class ProductMock extends Product {
        calculateDiscount(): number {
            return 0;
        }
    }

    let product: ProductMock;

    beforeEach(() => {
        product = new ProductMock('Product', 20, new Date());
    });

    it('should create a product instance', () => {
        expect(product).toBeTruthy();
    });

    it('should display product info', () => {
        const spy = spyOn(console, 'log');
        product.displayInfo();
        expect(spy).toHaveBeenCalledWith('Name: Product, Price: 20, Expiry Date: ' + new Date());
    });
});

describe('Item', () => {
    class ItemMock extends Item {
        calculateDiscount(): number {
            return 0;
        }

        calculateTax(): number {
            return 0;
        }
    }

    let item: Item;

    beforeEach(() => {
        item = new ItemMock('Item', 30, new Date(), 'Category');
    });

    it('should create an item instance', () => {
        expect(item).toBeTruthy();
    });

    it('should display item info', () => {
        const spy = spyOn(console, 'log');
        item.displayInfo();
        expect(spy).toHaveBeenCalledWith('Name: Item, Price: 30, Expiry Date: ' + new Date());
        expect(spy).toHaveBeenCalledWith('Category: Category');
    });
});

describe('Dairy', () => {
    let dairy: Dairy;
  
    beforeEach(() => {
      dairy = new Dairy('Test Dairy', 15, new Date(), 'milk', 0.1);
    });
  
    it('should calculate discount correctly', () => {
      expect(dairy.calculateDiscount()).toBeGreaterThan(10);
    });
  
    it('should calculate tax correctly', () => {
      expect(dairy.calculateTax()).toBeGreaterThan(5);
    });
  });