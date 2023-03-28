import React from 'react';
import ArticleSummary from './ArticleSummary';

function MoreStories({ articles }) {
  const moreArticles = articles.slice(4, 16);

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
