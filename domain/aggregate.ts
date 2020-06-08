import "source-map-support/register";
import { Aggregate } from "../model/aggregate";
import { Event } from "../model/event";

export default {
  buildReportingUnits(items: Event[]): Aggregate {
    return items.reduce<Aggregate>((accumulator: Aggregate, event: Event) => {
      return {
        ...accumulator,
        totalValue: accumulator.totalValue += event.value,
        count: ++accumulator.count,
      };
    }, new Aggregate());
  },

  aggregate(items: Aggregate[]): Aggregate {
    return items.reduce<Aggregate>(
      (accumulator: Aggregate, aggregate: Aggregate) => {
        return {
          ...accumulator,
          totalValue: accumulator.totalValue += aggregate.totalValue,
          count: accumulator.count += aggregate.count,
        };
      },
      new Aggregate()
    );
  },
};
