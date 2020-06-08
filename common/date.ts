import "source-map-support/register";
import { Granularity } from "../model/date";

export default {
  generateDatePath: (granularity: Granularity, date: Date = new Date()) => {
    let path = `${date.getUTCFullYear()}/`;

    if (granularity > Granularity.Yearly) path += `${date.getUTCMonth()}/`;
    if (granularity > Granularity.Monthly) path += `${date.getUTCDate()}/`;
    if (granularity > Granularity.Daily) path += `${date.getUTCHours()}/`;

    return path;
  },

  identifyGranularity(fromDate: string, toDate: string): Granularity {
    const fromDateCharArray = [...fromDate];
    const toDateCharArray = [...toDate];
    const longerDateString = Math.max(
      fromDateCharArray.length,
      toDateCharArray.length
    );

    return longerDateString <= 4
      ? Granularity.Yearly
      : longerDateString <= 6
      ? Granularity.Monthly
      : longerDateString <= 8
      ? Granularity.Daily
      : Granularity.Hourly;

    // let firstDiffIndex: number;

    // for (let i = 0; i < longerDateString; i++) {
    //   if (fromDateCharArray[i] !== toDateCharArray[i]) {
    //     firstDiffIndex = i;
    //     break;
    //   }
    // }

    // if (!firstDiffIndex) {
    //   return longerDateString <= 4
    //     ? Granularity.Yearly
    //     : longerDateString <= 6
    //     ? Granularity.Monthly
    //     : longerDateString <= 8
    //     ? Granularity.Daily
    //     : Granularity.Hourly;
    // }

    // return firstDiffIndex < 4
    //   ? Granularity.Yearly
    //   : firstDiffIndex < 6
    //   ? Granularity.Monthly
    //   : firstDiffIndex < 8
    //   ? Granularity.Daily
    //   : Granularity.Hourly;
  },

  parseDateString(dateString: string): Date {
    if (dateString.length > 6) {
      return new Date(
        Number.parseInt(dateString.substring(0, 4)),
        Number.parseInt(dateString.substring(5, 8)),
        Number.parseInt(dateString.substring(8, 11))
      );
    }
  },
};
