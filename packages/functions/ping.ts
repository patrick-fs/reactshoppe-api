import { success, failure } from './response';

export default () => {
  try {
    return success(JSON.stringify({ message: 'all good' }));
  } catch (error) {
    const body = error.stack || JSON.stringify(error, null, 2);
    return failure(JSON.stringify(body));
  }
};
