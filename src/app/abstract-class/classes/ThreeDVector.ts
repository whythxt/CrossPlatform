import { Vector } from "./Vector";

export class ThreeDVector extends Vector {
  dimensions: [number, number, number];

  constructor(name: string, dimensions: [number, number, number]) {
      super(name);
      this.dimensions = dimensions;
  }

  getLength(): number {
      const [x, y, z] = this.dimensions;
      return Math.sqrt(x ** 2 + y ** 2 + z ** 2);
  }
}