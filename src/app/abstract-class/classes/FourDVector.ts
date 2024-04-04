import { Vector } from "./Vector";

export class FourDVector extends Vector {
    components: [number, number, number, number];

    constructor(name: string, components: [number, number, number, number]) {
        super(name);
        this.components = components;
    }

    getLength(): number {
        const [x, y, z, w] = this.components;
        return Math.sqrt(x ** 2 + y ** 2 + z ** 2 + w ** 2);
    }
}