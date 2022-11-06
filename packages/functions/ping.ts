import { success, failure } from './response';

export default () => {
  try {
    return success(JSON.stringify({ message: 'all good' }));
  } catch (error) {
    const e = error as Error;
    const body = e.stack || JSON.stringify(e, null, 2);
    return failure(JSON.stringify(body));
  }
};
