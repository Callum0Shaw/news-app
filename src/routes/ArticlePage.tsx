import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { Article } from '../features/articles/types';

import { selectArticles } from '../features/articles/store/articlesSlice';

function ArticlePage() {
  const { id } = useParams();
  const articles = useAppSelector(selectArticles);
  const article = articles.find((a: Article) => a.id === id);
  const date = new Date(article?.publishedAt);

  return (
    <main className="main__article__container">
      <article className="section__container article__container">
        <div className="article__details">
          <p>{article?.source.name}</p>
          <p>{date.toLocaleDateString()}</p>
        </div>
        <h2 className="article__title">{article?.title}</h2>
        <p className="article__description">{article?.description}</p>
        <div className={`article__image__container`}>
          {article?.urlToImage ? (
            <img className="card__image" src={article?.urlToImage} alt="" />
          ) : (
            <div className={`placeholder`}></div>
          )}
        </div>
        <p className="article__text">{article?.content}</p>
      </article>
      <aside className="aside__container">
        <h3>Latest stories:</h3>
        <p>{articles[0].title}</p>
        <hr className="aside__hr" />
        <p> {articles[1].title}</p>
        <hr className="aside__hr" />
        <p>{articles[2].title}</p>
      </aside>
    </main>
  );
}

export default ArticlePage;
