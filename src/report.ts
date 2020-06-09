import { APIGatewayProxyHandler } from "aws-lambda";
import date from "../common/date";
import s3 from "../io/s3";
import response from "../io/response";

// 1. validate event context - TODO
// 2. return aggregated report from READ bucket
export const getReport: APIGatewayProxyHandler = async (event, _context) => {
  const fromDate = event.queryStringParameters["fromDate"];
  const toDate = event.queryStringParameters["toDate"];
  const tenant = event.queryStringParameters["tenant"];

  const granularity = date.identifyGranularity(fromDate, toDate);
  const path = date.generateDatePath(Math.max(0, granularity - 1));
  const filesInDirectory = await s3.listFiles(
    path,
    process.env.REPORT_READ_BUCKET
  );
  const keys = filesInDirectory.Contents.map((object) => object.Key);
  // const keys = s3.getKeysFromList(filesInDirectory, path, granularity);
  const filesWithinDates = s3.filterKeys(
    keys,
    fromDate,
    toDate,
    path,
    granularity,
    [
      {
        key: "tenant",
        value: tenant,
      },
    ]
  );

  try {
    const items = await s3.getList(
      filesWithinDates,
      process.env.REPORT_READ_BUCKET
    );

    return response._200(items);
  } catch (error) {
    return response._500(error);
  }
};
