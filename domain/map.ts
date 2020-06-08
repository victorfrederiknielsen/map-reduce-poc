import { Event } from "../model/event";
import { Dimension, Aggregate } from "../model/aggregate";

export default {
  mapDimensionsFromEvents: (dimensions: Dimension[], events: Event[]) => {
    // TODO: If no events.
    const dimensionMap = new Map<string, Map<string, number[]>>();

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
    // TODO: If no aggregates.
    const dimensionMap = new Map<string, Map<string, Aggregate>>();

    aggregates.forEach((aggregate) => {
      dimensions.forEach((dimension) => {
        if (!dimensionMap.get(dimension.key))
          dimensionMap.set(dimension.key, new Map<string, Aggregate>());

        const valueMap = dimensionMap.get(dimension.key);
        const current = valueMap.get(aggregate[dimension.key]);

        valueMap.set(aggregate[dimension.key], {
          ...aggregate,
        });
      });
    });

    return dimensionMap;
  },
};
