import { APIGatewayProxyEvent } from 'aws-lambda';
import { addCustomAttribute } from 'newrelic';
import ping from './ping';
import checkout from './checkout';
import { failure, fullstoryHeader } from './response';

exports.main = async (event: APIGatewayProxyEvent) => {
  try {
    const fullstoryURL = event.headers ? event.headers[fullstoryHeader.toLocaleLowerCase()] : undefined;
    addCustomAttribute('FullStoryURL', fullstoryURL || 'none provided');
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
  } catch(error) {
    const e = error as Error;
    return failure(e.message);
  }
  
};
