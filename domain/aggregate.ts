import "source-map-support/register";
import { Aggregate } from "../model/aggregate";
import { Event } from "../model/event";
import { GUID } from "../model/guid";

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

  reduceDimensions(
    dimensionMap: Map<string, Map<string, number[]>>
  ): Map<string, Map<string, Aggregate>> {
    const mappedDimensions: Map<string, Map<string, Aggregate>> = new Map();

    Array.from(dimensionMap).forEach((dimensionMapArray) => {
      const dimensionKey = dimensionMapArray[0];
      const valueMap = dimensionMapArray[1];
      const aggregatedMap = new Map<string, Aggregate>();

      Array.from(valueMap).forEach((mapArray: [string, number[]]) => {
        const dimensionValue = mapArray[0];
        const value = mapArray[1];

        aggregatedMap.set(dimensionValue, {
          id: GUID.new(),
          count: value.length,
          totalValue: value.reduce((a, b) => a + b, 0),
          [dimensionKey]: dimensionValue,
        });
      });

      mappedDimensions.set(dimensionKey, aggregatedMap);
    });

    return mappedDimensions;
  },

  reduceDimensionsFromAggregates(
    dimensionMap: Map<string, Map<string, Aggregate>>
  ): Map<string, Map<string, Aggregate>> {
    const mappedDimensions: Map<string, Map<string, Aggregate>> = new Map();

    Array.from(dimensionMap).forEach((dimensionMapArray) => {
      const dimensionKey = dimensionMapArray[0];
      const valueMap = dimensionMapArray[1];
      const aggregatedMap = new Map<string, Aggregate>();

      Array.from(valueMap).forEach((mapArray: [string, Aggregate]) => {
        const dimensionValue = mapArray[0];
        const value = mapArray[1];
        const accumulated =
          aggregatedMap.get(dimensionValue) || new Aggregate();

        aggregatedMap.set(dimensionValue, {
          ...accumulated,
          count: accumulated.count + value.count,
          totalValue: accumulated.totalValue + value.totalValue,
          [dimensionKey]: dimensionValue,
        });
      });

      mappedDimensions.set(dimensionKey, aggregatedMap);
    });

    return mappedDimensions;
  },
};
