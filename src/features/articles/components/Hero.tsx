import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { getSelectedSource, getTitleParams } from '../store/articlesSlice';
import ArticleSummary from './ArticleSummary';
import { Article } from '../types';
import '../styles.css';

interface HeroProps {
  articles: Article[];
}

function Hero({ articles }: HeroProps) {
  const secondaryArticles = articles.slice(1, 4);
  const selectedSource = useAppSelector(getSelectedSource);
  const titleParams = useAppSelector(getTitleParams);

  return (
    <div className="hero__container">
      <hr />
      <h2>{`Today's latest${selectedSource.name === 'All' ? '' : ` from ${selectedSource.name}`}${
        titleParams ? ` featuring '${titleParams}'` : ''
      }:`}</h2>
      <div className="section__container hero__card__container">
        <ArticleSummary article={articles[0]} status={'primary'} key={articles[0]?.id} />
        <div className="vertical__rule"></div>
        <hr />
        <div className="secondaries__container">
          {secondaryArticles.map((article, i) => (
            <ArticleSummary article={article} status={'secondary'} key={article?.id} />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Hero;
