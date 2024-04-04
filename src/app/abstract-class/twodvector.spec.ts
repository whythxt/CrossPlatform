import { TwoDVector } from './classes/TwoDVector';

describe('TwoDVector', () => {
    it('should create a new TwoDVector instance', () => {
        const vector = new TwoDVector('Vector', [3, 4]);
        expect(vector).toBeTruthy();
        expect(vector instanceof TwoDVector).toBe(true);
    });

    it('should calculate the correct length', () => {
        const vector = new TwoDVector('Test', [3, 4]);
        expect(vector.getLength()).toBe(5);
    });
});
