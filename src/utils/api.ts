import { Article } from '../types/articles';
import { Source } from '../types/sources';

const apiKey = '088b805218af4abe9d646550c066ca54';

function removeTrailingSource(string: string): string {
  const regex = /^.*?(?= - )/;
  const match = string.match(regex);
  const title = match ? match[0] : '';
  return title;
}

interface ArticleResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface ErrorResponse {
  status: string;
  code: string;
  message: string;
}

async function getAllArticles(): Promise<ArticleResponse> {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  if (res.status !== 200) {
    const error: ErrorResponse = await res.json();
    throw new Error(error.message);
  }
  return await res.json();
}

async function getArticlesBySource(source: string): Promise<ArticleResponse> {
  const res = await fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`);
  if (res.status !== 200) {
    const error: ErrorResponse = await res.json();
    throw new Error(error.message);
  }
  return await res.json();
}

async function getArticlesByTitle(source: string, titleParams: string): Promise<ArticleResponse> {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURI(
      titleParams
    )}&sources=${source}&apiKey=${apiKey}`
  );
  if (res.status !== 200) {
    const error: ErrorResponse = await res.json();
    throw new Error(error.message);
  }
  return await res.json();
}

async function getFilteredArticles(source: string, titleParams: string) {
  if (!titleParams) {
    const res = await fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`);
    if (res.status !== 200) throw new Error(res.message);
    return await res.json();
  }
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURI(
      titleParams
    )}&searchIn=title&sources=${source}&apiKey=${apiKey}`
  );
}

interface SourceResponse {
  status: string;
  sources: Source[];
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

export {
  getAllArticles,
  getArticlesBySource,
  getAllSources,
  getArticlesByTitle,
  removeTrailingSource,
};
