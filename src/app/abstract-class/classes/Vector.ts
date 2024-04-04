export abstract class Vector {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  
    abstract getLength(): number;
}