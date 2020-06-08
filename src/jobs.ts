import { APIGatewayProxyHandler } from "aws-lambda";
import date from "../common/date";
import { Granularity } from "../model/date";
import s3 from "../io/s3";
import aggregate from "../domain/aggregate";
import response from "../io/response";
import { Dimension } from "../model/aggregate";
import map from "../domain/map";

// *  trigger every 1 hour - TODO
// 1. read the WRITE bucket
// 2. transform the data to aggregate
// 3. upload to the UNIT bucket
export const buildReportingUnits: APIGatewayProxyHandler = async (
  _event,
  _context
) => {
  try {
    const result = await _buildReportingUnits(
      Granularity.Hourly,
      process.env.REPORT_WRITE_BUCKET,
      process.env.REPORT_READ_BUCKET
    );

    return response._200({
      uploadResult: result,
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
  try {
    const result = await _buildAggregations(
      Granularity.Daily,
      process.env.REPORT_READ_BUCKET,
      process.env.REPORT_READ_BUCKET
    );
    return response._200({
      uploadResult: result,
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
  try {
    const result = await _buildAggregations(
      Granularity.Yearly,
      process.env.REPORT_READ_BUCKET,
      process.env.REPORT_READ_BUCKET
    );

    return response._200({
      aggregate: result,
    });
  } catch (error) {
    return response._500(error);
  }
};

export const _buildAggregations = async (
  granularity: Granularity,
  readBucket: string,
  writeBucket: string,
  dimensions: Dimension[] = [{ key: "tenant" }]
) => {
  const path = date.generateDatePath(granularity);

  try {
    const filesInDirectory = await s3.listFiles(path, readBucket);
    const keys = s3.getKeysFromList(filesInDirectory);
    const aggregates = await s3.getList(keys, readBucket);

    const mappedDimensions = map.mapDimensionsFromAggregates(
      dimensions,
      aggregates
    );
    const reducedDimension = aggregate.reduceDimensionsFromAggregates(
      mappedDimensions
    );

    return await s3.writeBatch(reducedDimension, path, writeBucket);
  } catch (error) {
    throw error;
  }
};

export const _buildReportingUnits = async (
  granularity: Granularity,
  readBucket: string,
  writeBucket: string,
  dimensions: Dimension[] = [{ key: "tenant" }]
) => {
  const path = date.generateDatePath(granularity);

  try {
    const filesInDirectory = await s3.listFiles(path, readBucket);
    const keys = s3.getKeysFromList(filesInDirectory);
    const events = await s3.getList(keys, readBucket);

    const mappedDimensions = map.mapDimensionsFromEvents(dimensions, events);
    const reducedDimension = aggregate.reduceDimensions(mappedDimensions);

    return await s3.writeBatch(reducedDimension, path, writeBucket);
  } catch (error) {
    throw error;
  }
};
