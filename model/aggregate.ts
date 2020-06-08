import { GUID } from "./guid";

export class Aggregate {
  id: string = GUID.new();
  count: number = 0;
  totalValue: number = 0;

  [key: string]: any;
}

export interface ReducedDimension {
  dimensionKey: string;
  dimensionValue: string;
  count: number;
  totalValue: number;
}

export interface Dimension {
  key: string;
}
