import React from 'react';
import { Link } from "react-router-dom";
import { removeTrailingSource } from '../utils/functions';
import { getSelectedSource } from '../store/articlesSlice';
import { useAppSelector } from '../../../store/hooks';
import { Article } from '../types';
import '../styles.css';

interface PrimaryArticleProps {
  article: Article;
  status: 'primary' | 'secondary';
}

function ArticleSummary({ article, status }: PrimaryArticleProps) {
  const date = new Date(article?.publishedAt);
  const title = removeTrailingSource(article?.title);
  const { id } = useAppSelector(getSelectedSource);  

  return (
    <article className={`card__container ${status}__container`}>
      <div className={`card__image__container image__container__${status}`}>
        {article?.urlToImage ? (
          <img className="card__image" src={article?.urlToImage} alt="" />
        ) : (
          <div className={`placeholder placeholder__${status}`}></div>
        )}
        <p className="date__small">{date.toLocaleDateString()}</p>
        <p className="source__small">{article?.source.name}</p>
      </div>
      <div className="text__container__vertical">
        <h3>{id === 'all' ? title : article?.title}</h3>
        <p>{article?.description}</p>
        <Link className="readmore__link" to={`/article/${article?.id}`}>read more...</Link>
      </div>
    </article>
  );
}

export default ArticleSummary;
