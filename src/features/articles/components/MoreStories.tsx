import React, { useState, useEffect } from 'react';
import ArticleSummary from './ArticleSummary';
import { Article } from '../types';
import '../styles.css';

interface MoreStoriesProp {
  articles: Article[];
}

function MoreStories({ articles }: MoreStoriesProp) {
  const [articleCount, setArticleCount] = useState(16);

  const moreArticles = articles.slice(4, articleCount);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    function handleScrollEvent() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
          setArticleCount(articleCount + 12);
          if (articleCount > 100) setArticleCount(100);
        }, 500);
      }
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      clearTimeout(timerId);
    };
  }, [articleCount]);

  return (
    <div className="morestories__container">
      <h2>More stories:</h2>
      <ul className="storylist section__container">
        {moreArticles.map((article) => (
          <li className="storylist__item" key={article?.id}>
            <ArticleSummary article={article} status={'secondary'} />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default MoreStories;
