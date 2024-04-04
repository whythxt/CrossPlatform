import { Vector } from "./Vector";

export class TwoDVector extends Vector {
  components: [number, number];

  constructor(name: string, components: [number, number]) {
      super(name);
      this.components = components;
  }

  getLength(): number {
      const [x, y] = this.components;
      return Math.sqrt(x ** 2 + y ** 2);
  }
}