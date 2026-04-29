import { Luggage } from "./Luggage";
import { FragileLuggage } from "./FragileLuggage";

export class ListOfLuggages {
  private luggages: Luggage[] = [];

  insertLuggage(luggage: Luggage): void {
    this.luggages.push(luggage);
  }

  printAllLuggages(): void {
    this.luggages.forEach((l) => console.log(l.toString()));
  }

  priceOfEachLuggage(): void {
    this.luggages.forEach((l) =>
      console.log(`${l.getDescription()} -> $${l.getPrice()}`)
    );
  }

  totalPrice(): number {
    return this.luggages.reduce((sum, l) => sum + l.getPrice(), 0);
  }

  getFragileLuggageWithInsurance(): {
    quantity: number;
    totalInsurance: number;
  } {
    const fragile = this.luggages.filter(
      (l) => l instanceof FragileLuggage
    ) as FragileLuggage[];

    return {
      quantity: fragile.length,
      totalInsurance: fragile.reduce(
        (sum, f) => sum + f.getInsuranceValue(),
        0
      ),
    };
  }

  sortByPrice(): void {
    this.luggages.sort((a, b) => a.getPrice() - b.getPrice());
  }

  sortByWeight(): void {
    this.luggages.sort((a, b) => a.getWeight() - b.getWeight());
  }
}