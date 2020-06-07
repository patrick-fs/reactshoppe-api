import { APIGatewayProxyEvent } from 'aws-lambda';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { TableNames } from 'reactshoppe-database';
import { success, failure } from './response';

export default async (event: APIGatewayProxyEvent) => {
  const ddb = new AWS.DynamoDB.DocumentClient();
  const newOrder = {
    id: uuidv4(),
    products: ['1', '2', '3'],
  };
  try {
    const result = await ddb.put({
      TableName: TableNames.Order,
      Item: newOrder
    }).promise();
    
    const body = JSON.stringify(result.$response.data);
    console.log(`successful ddb request: ${body}`);

    return success(body);

  } catch (error) {
    const body = error.stack || JSON.stringify(error, null, 2);
    return failure(body);
  }
};
