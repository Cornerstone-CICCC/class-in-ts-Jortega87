import { Priority } from "./Priority";
import { FragileLuggage } from "./FragileLuggage";
import { RegularLuggage } from "./RegularLuggage";
import { CarryOnLuggage } from "./CarryOnLuggage";
import { ListOfLuggages } from "./ListOfLuggages";

const fragile = new FragileLuggage(
  10,
  "Box with fragile items",
  Priority.Normal,
  100
);

const regular = new RegularLuggage(
  30,
  "Luggage full of clothes",
  Priority.Priority
);

const carryOn = new CarryOnLuggage(
  6,
  "Personal items",
  Priority.Urgent
);

const list = new ListOfLuggages();

list.insertLuggage(fragile);
list.insertLuggage(regular);
list.insertLuggage(carryOn);

list.printAllLuggages();
list.priceOfEachLuggage();

console.log("Total:", list.totalPrice());
console.log("Fragile info:", list.getFragileLuggageWithInsurance());