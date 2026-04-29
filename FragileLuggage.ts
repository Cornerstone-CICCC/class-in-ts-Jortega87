import { Luggage } from "./Luggage";
import { Priority } from "./Priority";

export class FragileLuggage extends Luggage {
  private insurance: number;

  constructor(
    weight: number,
    description: string,
    priority: Priority,
    insurance: number
  ) {
    super(weight, description, priority);
    this.insurance = insurance;
  }

  getInsuranceValue(): number {
    return this.insurance;
  }

  setInsuranceValue(value: number): void {
    this.insurance = value;
  }

  getPrice(): number {
    if (this.priority === Priority.Normal) {
      return this.insurance;
    }

    const multiplier = this.priority === Priority.Priority ? 5 : 10;

    return this.fee * multiplier + this.insurance;
  }

  toString(): string {
    return `Fragile Luggage: ${this.description}, Insurance: ${this.insurance}`;
  }
}