export const fullstoryHeader = 'X-FullStory-URL';

export const headers = [fullstoryHeader,
  'Content-Type',
  'X-Amz-Date',
  'Authorization',
  'X-Api-Key',
  'X-Amz-Security-Token',
  'X-Amz-User-Agent'];

const corsHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Headers': headers.join(','),
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
};

export const success = (body: string) => {
  return {
    statusCode: 200,
    headers: corsHeaders,
    body,
  }
};

export const failure = (body: string, statusCode = 500) => {
  return {
    statusCode,
    headers: corsHeaders,
    body,
  }
};
