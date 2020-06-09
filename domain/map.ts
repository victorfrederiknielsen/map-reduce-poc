import { Event } from "../model/event";
import { Dimension, Aggregate } from "../model/aggregate";

export default {
  mapDimensionsFromEvents: (dimensions: Dimension[], events: Event[]) => {
    const dimensionMap = new Map<string, Map<string, number[]>>();

    if (!events) return dimensionMap;

    events.forEach((event) => {
      dimensions.forEach((dimension) => {
        if (!dimensionMap.get(dimension.key))
          dimensionMap.set(dimension.key, new Map<string, number[]>());

        const valueMap = dimensionMap.get(dimension.key);
        const values = valueMap.get(event[dimension.key]);

        valueMap.set(
          event[dimension.key],
          values ? [...values, event.value] : [event.value]
        );
      });
    });

    return dimensionMap;
  },

  mapDimensionsFromAggregates: (
    dimensions: Dimension[],
    aggregates: Aggregate[]
  ) => {
    const dimensionMap = new Map<string, Map<string, Aggregate>>();

    if (!aggregates) return dimensionMap;

    aggregates.forEach((aggregate) => {
      dimensions.forEach((dimension) => {
        if (!dimensionMap.get(dimension.key))
          dimensionMap.set(dimension.key, new Map<string, Aggregate>());

        const valueMap = dimensionMap.get(dimension.key);
        const current =
          valueMap.get(aggregate[dimension.key]) || new Aggregate();

        valueMap.set(aggregate[dimension.key], {
          ...aggregate,
          count: aggregate.count += current.count,
          totalValue: aggregate.totalValue += current.totalValue,
        });
      });
    });

    return dimensionMap;
  },
};
