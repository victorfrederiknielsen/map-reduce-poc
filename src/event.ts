import { APIGatewayProxyHandler } from "aws-lambda";
import date from "../common/date";
import { Granularity } from "../model/date";
import s3 from "../io/s3";
import response from "../io/response";

// 1. validate event - TODO
// 2. write event to WRITE bucket
export const writeEvent: APIGatewayProxyHandler = async (event, _context) => {
  const body = JSON.parse(event.body);
  const fileName = `${date.generateDatePath(Granularity.Hourly)}${
    body.id
  }.json`;

  try {
    const result = await s3.write(
      body,
      fileName,
      process.env.REPORT_WRITE_BUCKET
    );

    return response._200({
      message: "Event written to bucket. Hurray!",
      result: result,
    });
  } catch (error) {
    return response._500(error);
  }
};
