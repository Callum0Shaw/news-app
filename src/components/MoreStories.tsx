import React from 'react';
import SecondaryArticle from './SecondaryArticle';

function MoreStories({ articles }) {
  const moreArticles = articles.slice(4, 16);

  return (
    <div className="morestories__container">
      <h2>More stories:</h2>
      <ul className="storylist article__container">
        {moreArticles.map((article, i) => (
          <li className="storylist__item">
            <SecondaryArticle article={article} key={i} />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default MoreStories;
