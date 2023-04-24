import { Article } from '../types';

// const apiKey = '088b805218af4abe9d646550c066ca54';
const apiKey = 'c75d4d1562164695bad369d7a42a1249';

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

async function getArticles(source: string, titleParams: string): Promise<ArticleResponse> {
  if (titleParams) return getArticlesByTitle(source, titleParams);
  if (source === 'all') return getAllArticles();
  return getArticlesBySource(source);
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

export { getArticles };
