import { APIGatewayProxyHandler } from "aws-lambda";
import date from "../common/date";
import { Granularity } from "../model/date";
import s3 from "../io/s3";
import aggregate from "../domain/aggregate";
import response from "../io/response";

// *  trigger every 1 hour - TODO
// 1. read the WRITE bucket
// 2. transform the data to aggregate
// 3. upload to the READ bucket
export const aggregateHourly: APIGatewayProxyHandler = async (
  _event,
  _context
) => {
  const path = date.generateDatePath(Granularity.Hourly);

  try {
    // Get all objects as JSON from bucket of the hour
    const filesInDirectory = await s3.listFiles(
      path,
      process.env.REPORT_WRITE_BUCKET
    );
    const keys = s3.getKeysFromList(filesInDirectory);
    const events = await s3.getList(keys, process.env.REPORT_WRITE_BUCKET);

    // Transform into aggregate
    const reportingUnits = aggregate.buildReportingUnits(events);

    // Upload aggregate to READ bucket
    const fileName = `${path}report-unit.json`;
    const uploadResult = await s3.write(
      reportingUnits,
      fileName,
      process.env.REPORT_UNIT_BUCKET
    );

    return response._200({
      aggregate: reportingUnits,
      uploadResult: uploadResult,
    });
  } catch (error) {
    return response._500(error);
  }
};

// *  trigger every 1 day - TODO
// 1. read the UNIT bucket
// 2. transform the data to aggregate
// 3. upload to the READ bucket
export const aggregateDaily: APIGatewayProxyHandler = async (
  _event,
  _context
) => {
  const path = date.generateDatePath(Granularity.Daily);

  try {
    const filesInDirectory = await s3.listFiles(
      path,
      process.env.REPORT_UNIT_BUCKET
    );
    const keys = s3.getKeysFromList(filesInDirectory);
    const events = await s3.getList(keys, process.env.REPORT_UNIT_BUCKET);

    // Transform into aggregate
    const aggregatedResult = aggregate.aggregate(events);

    // Upload aggregate to READ bucket
    const fileName = `${path}aggregate.json`;
    const uploadResult = await s3.write(
      aggregatedResult,
      fileName,
      process.env.REPORT_READ_BUCKET
    );

    return response._200({
      aggregate: aggregatedResult,
      uploadResult: uploadResult,
    });
  } catch (error) {
    return response._500(error);
  }
};

// *  trigger every 1 month - TODO
// 1. read the READ bucket
// 2. transform the data to aggregate
// 3. upload to the READ bucket
export const aggregateMonthly: APIGatewayProxyHandler = async (
  _event,
  _context
) => {
  const path = date.generateDatePath(Granularity.Monthly);

  try {
    const filesInDirectory = await s3.listFiles(
      path,
      process.env.REPORT_READ_BUCKET
    );
    const keys = s3.getKeysFromListForGranularity(
      filesInDirectory,
      Granularity.Monthly
    );
    const events = await s3.getList(keys, process.env.REPORT_READ_BUCKET);

    // Transform into aggregate
    const aggregatedResult = aggregate.aggregate(events);

    // Upload aggregate to READ bucket
    const fileName = `${path}aggregate.json`;
    const uploadResult = await s3.write(
      aggregatedResult,
      fileName,
      process.env.REPORT_READ_BUCKET
    );

    return response._200({
      aggregate: aggregatedResult,
      uploadResult: uploadResult,
    });
  } catch (error) {
    return response._500(error);
  }
};

// *  trigger every 1 year - TODO
// 1. read the READ bucket
// 2. transform the data to aggregate
// 3. upload to the READ bucket
export const aggregateYearly: APIGatewayProxyHandler = async (
  _event,
  _context
) => {
  const granularity = Granularity.Yearly;
  const path = date.generateDatePath(granularity);

  try {
    const filesInDirectory = await s3.listFiles(
      path,
      process.env.REPORT_READ_BUCKET
    );
    const keys = s3.getKeysFromListForGranularity(
      filesInDirectory,
      granularity
    );
    const events = await s3.getList(keys, process.env.REPORT_READ_BUCKET);

    // Transform into aggregate
    const aggregatedResult = aggregate.aggregate(events);

    // Upload aggregate to READ bucket
    const fileName = `${path}aggregate.json`;
    const uploadResult = await s3.write(
      aggregatedResult,
      fileName,
      process.env.REPORT_READ_BUCKET
    );

    return response._200({
      aggregate: aggregatedResult,
      uploadResult: uploadResult,
    });
  } catch (error) {
    return response._500(error);
  }
};
