import { ThreeDVector } from './classes/ThreeDVector';

describe('ThreeDVector', () => {
    it('should create a new ThreeDVector instance', () => {
        const vector = new ThreeDVector('Vector', [3, 4, 5]);
        expect(vector).toBeTruthy();
        expect(vector instanceof ThreeDVector).toBe(true);
    });

    it('should calculate the correct length of a ThreeDVector', () => {
        const vector = new ThreeDVector('Vector', [3, 4, 5]);
        expect(vector.getLength()).toBeCloseTo(Math.sqrt(50));
    });
});