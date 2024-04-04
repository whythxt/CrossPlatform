import { FourDVector } from './classes/FourDVector';

describe('FourDVector', () => {
    it('should create a new FourDVector instance', () => {
        const vector = new FourDVector('Vector', [3, 4, 5, 6]);
        expect(vector).toBeTruthy();
        expect(vector instanceof FourDVector).toBe(true);
    });

    it('should calculate the correct length of a FourDVector', () => {
        const vector = new FourDVector('Vector', [3, 4, 5, 6]);
        expect(vector.getLength()).toBeCloseTo(Math.sqrt(86));
    });
});