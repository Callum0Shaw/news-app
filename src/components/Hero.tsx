import React from 'react';
import PrimaryArticle from './PrimaryArticle';
import SecondaryArticle from './SecondaryArticle';

function Hero({ articles }) {
  const secondaryArticles = articles.slice(1, 4);

  return (
    <div className="hero__container">
      <hr />
      <h2>Today's latest:</h2>
      <div className="article__container hero__article__container">
        <PrimaryArticle article={articles[0]} key={55} />
        <div className="vertical__rule"></div>
        <hr />
        <div className="secondaries__container">
          {secondaryArticles.map((article, i) => (
            <SecondaryArticle article={article} key={i} />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Hero;
