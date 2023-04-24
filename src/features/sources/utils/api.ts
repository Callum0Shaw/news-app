import { Source } from '../types';

const apiKey = '088b805218af4abe9d646550c066ca54';

interface SourceResponse {
  status: string;
  sources: Source[];
}

interface ErrorResponse {
  status: string;
  code: string;
  message: string;
}

async function getAllSources(): Promise<Source[]> {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines/sources?apiKey=088b805218af4abe9d646550c066ca54'
  );
  if (res.status !== 200) {
    const error: ErrorResponse = await res.json();
    throw new Error(error.message);
  }
  const jsondata: SourceResponse = await res.json();
  return jsondata.sources;
}

export { getAllSources }