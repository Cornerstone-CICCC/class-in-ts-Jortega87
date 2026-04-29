import { Priority } from "./Priority";

export abstract class Luggage {
  protected weight: number;
  protected description: string;
  protected priority: Priority;
  protected readonly fee: number = 5.2;

  constructor(weight: number, description: string, priority: Priority) {
    this.weight = weight;
    this.description = description;
    this.priority = priority;
  }

  getWeight(): number {
    return this.weight;
  }

  setWeight(weight: number): void {
    this.weight = weight;
  }

  getDescription(): string {
    return this.description;
  }

  getPriority(): Priority {
    return this.priority;
  }

  abstract getPrice(): number;

  abstract toString(): string;
}