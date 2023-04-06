import Sources from '../components/sources/Sources';
import Hero from '../components/Hero';
import MoreStories from '../components/articles/MoreStories';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import { useEffect, useState } from 'react';
import {
  fetchArticles,
  getArticlesError,
  getArticlesStatus,
  selectArticles,
  getSelectedSource,
  getTitleParams,
} from '../store/articlesSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks';

function Home() {
  const dispatch = useAppDispatch();
  const articlesStatus = useAppSelector(getArticlesStatus);
  const error = useAppSelector(getArticlesError);
  const articles = useAppSelector(selectArticles);
  const selectedSource = useAppSelector(getSelectedSource);
  const titleParams = useAppSelector(getTitleParams);

  useEffect(() => {
    if (articlesStatus === 'idle') {
      dispatch(fetchArticles({ selectedSource, titleParams }));
    }
  }, [articlesStatus, dispatch, selectedSource, titleParams]);

  return (
    <main>
      <Sources />
      {articlesStatus === 'succeeded' && (
        <>
          <Hero articles={articles} />
          <MoreStories articles={articles} />
        </>
      )}
      {articlesStatus === 'failed' && (
        <Error
          title={'Too many requests'}
          message={'Apologies, We are unable to process your request.'}
        />
      )}
      {articlesStatus === 'loading' && <Spinner />}
    </main>
  );
}

export default Home;
