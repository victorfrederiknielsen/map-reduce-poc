import "source-map-support/register";
import { S3 } from "aws-sdk";
import { ListObjectsV2Output } from "aws-sdk/clients/s3";
import { Granularity } from "../model/date";
import { isBetweenDateStrings } from "../common/number";
import { Aggregate } from "../model/aggregate";

export const config: S3.ClientConfiguration = process.env.IS_OFFLINE
  ? {
      s3ForcePathStyle: true,
      accessKeyId: "S3RVER",
      secretAccessKey: "S3RVER",
      endpoint: "http://localhost:8000",
    }
  : undefined;

export const _s3Client = new S3(config);

export default {
  async get(fileName: string, bucket: string) {
    const params = {
      Bucket: bucket,
      Key: fileName,
    };

    let data = await _s3Client.getObject(params).promise();

    if (!data) {
      throw Error(`Failed to get file ${fileName}, from ${bucket}`);
    }

    if (/\.json$/.test(fileName)) {
      data = JSON.parse(data.Body.toString());
    }

    return data;
  },

  async getList(keys: string[], bucket: string) {
    if (!keys.length) {
      return [];
    }

    return Promise.all(
      keys.map((key) => {
        return this.get(key, bucket);
      })
    );
  },

  // TODO:  Include pagination for supporting directories with >1000 items.
  async listFiles(path: string, bucket: string) {
    const params = {
      Bucket: bucket,
      Prefix: path,
    };

    let data = await _s3Client.listObjectsV2(params).promise();

    if (!data) throw Error("there was an error listing the files");

    return data;
  },

  async write(data: any, fileName: string, bucket: string) {
    const params = {
      Bucket: bucket,
      Body: JSON.stringify(data),
      Key: fileName,
    };

    const newData = await _s3Client.putObject(params).promise();

    if (!newData) {
      throw Error("there was an error writing the file");
    }

    return newData;
  },

  async writeBatch(
    map: Map<string, Map<string, Aggregate>>,
    path: string,
    bucket: string
  ) {
    return Promise.all(
      Array.from(map).map((mapArray) => {
        const dimensionKey = mapArray[0];
        const valueMap = mapArray[1];

        return Array.from(valueMap).map((valueArray) => {
          const dimensionValue = valueArray[0];
          const aggregate = valueArray[1];
          const fullFileName = `${path}${dimensionKey}/${dimensionValue}/aggregate.json`;

          return this.write(aggregate, fullFileName, bucket);
        });
      })
    );
  },

  getKeysFromList(list: ListObjectsV2Output, path?: string, depth: number = 1) {
    return list.Contents.filter((object) => {
      // very ineffecient, use delimiter when getting list, but it isnt playing nice.
      // Just get the path and the files within a single depth.
      // /5/tentant/lobsterink/...  -- good!
      // /5/6/tenant/lobsterink/... -- no good!
      const key = object.Key.replace(path, "");
      const keyArray = key.split("/");
      const parsedDirectory = Number.parseInt(keyArray[depth]);

      return Number.isNaN(parsedDirectory);
    }).map((object) => {
      if (object.Key) {
        return object.Key;
      }
    });
  },

  getKeysFromListForGranularity(
    list: ListObjectsV2Output,
    granularity: Granularity
  ) {
    const keys: string[] = [];

    list.Contents.forEach((object) => {
      const directoryArray = object.Key.split("/");

      switch (granularity) {
        case Granularity.Yearly:
          if (directoryArray.length === 3) keys.push(object.Key);
          break;
        case Granularity.Monthly:
          if (directoryArray.length === 4) keys.push(object.Key);
          break;
        case Granularity.Daily:
          if (directoryArray.length === 5) keys.push(object.Key);
          break;
        case Granularity.Hourly:
          if (directoryArray.length === 6) keys.push(object.Key);
          break;
        default:
          throw Error("Could not find granularity.");
      }
    });

    return keys;
  },

  getKeysWithinDatesForGranularity(
    list: ListObjectsV2Output,
    fromDate: string,
    toDate: string,
    granularity: Granularity
  ) {
    const keys = [];

    list.Contents.forEach((object) => {
      const directoryArray = object.Key.split("/");

      switch (granularity) {
        case Granularity.Yearly:
          if (
            isBetweenDateStrings(
              fromDate.substring(0, 4),
              toDate.substring(0, 4),
              directoryArray[0]
            ) &&
            directoryArray.length === 2
          ) {
            keys.push(object.Key);
          }
          break;
        case Granularity.Monthly:
          if (
            isBetweenDateStrings(
              fromDate.substring(4, 6),
              toDate.substring(4, 6),
              directoryArray[1]
            ) &&
            directoryArray.length === 3
          ) {
            keys.push(object.Key);
          }
          break;
        case Granularity.Daily:
          if (
            isBetweenDateStrings(
              fromDate.substring(6, 8),
              toDate.substring(6, 8),
              directoryArray[2]
            ) &&
            directoryArray.length === 4
          ) {
            keys.push(object.Key);
          }
          break;
        case Granularity.Hourly:
          if (
            isBetweenDateStrings(
              fromDate.substring(8, 10),
              toDate.substring(8, 10),
              directoryArray[3]
            ) &&
            directoryArray.length === 5
          ) {
            keys.push(object.Key);
          }
          break;
        default:
          throw Error("Could not find Granularity");
      }
    });

    return keys;
  },
};
