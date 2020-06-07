import { APIGatewayProxyEvent } from 'aws-lambda';
import ping from './ping';
import checkout from './checkout';
import { failure } from './response';

exports.main = async (event: APIGatewayProxyEvent) => {
  const notFound = () => failure(JSON.stringify({ message: 'not found' }), 404);
  switch (event.path) {
    case '/ping':
      return ping();
    case '/checkout':
      if (event.httpMethod === 'POST') return checkout(event);
      return notFound();
    default:
      return notFound();
  }
};
