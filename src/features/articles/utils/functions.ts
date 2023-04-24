import { Article } from '../types';

function removeTrailingSource(string: string): string {
  const regex = /^.*?(?= - )/;
  const match = string.match(regex);
  const title = match ? match[0] : '';
  return title;
}

// source: Source;
// author: string;
// title: string;
// description: string;
// url: string;
// urlToImage: string;
// publishedAt: string;
// content: string;
// id?: string;
function createID(article: Article): string {
  article.content = article.content.slice(0, 10);
  const jsonArticle = JSON.stringify(article);
  return encodeURIComponent(jsonArticle);
}

export { removeTrailingSource, createID };
