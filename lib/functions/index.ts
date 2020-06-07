import { APIGatewayProxyEvent } from 'aws-lambda';
import ping from './ping';
import { failure } from './response';

exports.main = async (event: APIGatewayProxyEvent) => {
  switch (event.path) {
    case '/ping':
      return ping();
    default:
      return failure(JSON.stringify({ message: 'not found' }), 404);
  }
};
