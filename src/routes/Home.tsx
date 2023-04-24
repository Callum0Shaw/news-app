import Sources from '../features/sources/components/Sources';
import Hero from '../features/articles/components/Hero';
import MoreStories from '../features/articles/components/MoreStories';
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
} from '../features/articles/store/articlesSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

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
