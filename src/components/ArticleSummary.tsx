import React from 'react';

function PrimaryArticle({ article, status }) {
  const regex = /^.*?(?= - )/;
  const match = article?.title.match(regex);
  const title = match ? match[0] : '';
  const date = new Date(article?.publishedAt);

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
        <h3>{article?.title}</h3>
        <p>
          {article?.description}
        </p>
        <a className="readmore__link" href={`/article/${article?.id}`}>
          read more...
        </a>
      </div>
    </article>
  );
}

export default PrimaryArticle;
