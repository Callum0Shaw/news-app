import React from 'react';
import ArticleSummary from './ArticleSummary';

function Hero({ articles, selectedSource }) {
  const secondaryArticles = articles.slice(1, 4);

  return (
    <div className="hero__container">
      <hr />
      <h2>{`Today's latest${
        selectedSource === 'all' || selectedSource.label === 'All' ? '' : ` from ${selectedSource.label}`
      }:`}</h2>
      <div className="section__container hero__card__container">
        <ArticleSummary article={articles[0]} status={'primary'} key={articles[0]?.id} />
        <div className="vertical__rule"></div>
        <hr />
        <div className="secondaries__container">
          {secondaryArticles.map((article) => (
            <ArticleSummary article={article} status={'secondary'} key={article?.id} />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Hero;
