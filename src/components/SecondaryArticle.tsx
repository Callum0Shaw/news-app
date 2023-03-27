import React from 'react';

function SecondaryArticle({ article }) {
  const date = article && new Date(article.publishedAt)
  
  return (
    <article className="secondary__container">
      <div className="placeholder placeholder__secondary">
        <p className="article__date__small">{article && date.toLocaleDateString()}</p>
        <p className="article__source__small">{article && article.author}</p>
      </div>
      <div className="text__container__vertical">
        <h3>{article && article.title}</h3>
        <p>
          in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque
          gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum
        </p>
        <a className="readmore__link" href="#">
          read more...
        </a>
      </div>
    </article>
  );
}

export default SecondaryArticle;
