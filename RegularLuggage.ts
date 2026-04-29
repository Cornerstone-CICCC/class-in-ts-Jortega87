import { Luggage } from "./Luggage";
import { Priority } from "./Priority";

export class RegularLuggage extends Luggage {
  constructor(weight: number, description: string, priority: Priority) {
    super(weight, description, priority);
  }

  getPrice(): number {
    const extraWeight = this.weight - 23;

    if (extraWeight <= 0) return 0;

    const multiplier =
      this.priority === Priority.Normal
        ? 1
        : this.priority === Priority.Priority
        ? 5
        : 10;

    return this.fee * multiplier * extraWeight;
  }

  toString(): string {
    return `Regular Luggage: ${this.description}`;
  }
}