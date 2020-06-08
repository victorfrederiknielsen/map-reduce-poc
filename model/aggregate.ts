import { GUID } from "./guid";

export class Aggregate {
  id: string = GUID.new();
  count: number = 0;
  totalValue: number = 0;
}
