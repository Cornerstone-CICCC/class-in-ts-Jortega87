import { Luggage } from "./Luggage";
import { Priority } from "./Priority";

export class CarryOnLuggage extends Luggage {
  constructor(weight: number, description: string, priority: Priority) {
    super(weight, description, priority);
  }

  getPrice(): number {
    const extraWeight = this.weight - 5;

    if (extraWeight <= 0) return 0;

    return this.fee * 3 * extraWeight;
  }

  toString(): string {
    return `Carry-on Luggage: ${this.description}`;
  }
}