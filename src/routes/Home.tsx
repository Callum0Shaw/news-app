import Sources from '../components/Sources';
import Hero from '../components/Hero';
import MoreStories from '../components/MoreStories';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';
import {
  fetchArticles,
  fetchAll,
  getArticlesError,
  getArticlesStatus,
  selectArticles,
  getSelectedSource,
  getTitleParams
} from '../store/articlesSlice';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const articlesStatus = useSelector(getArticlesStatus);
  const error = useSelector(getArticlesError);
  const articles = useSelector(selectArticles);
  const selectedSource = useSelector(getSelectedSource)
  const titleParams = useSelector(getTitleParams)

  useEffect(() => {
    if (articlesStatus === 'idle') {      
      dispatch(fetchArticles({selectedSource, titleParams}))
    }

  }, [articlesStatus, dispatch, selectedSource, titleParams]);



  return (
    <main>
      <Sources />
      {articlesStatus === 'succeeded' ? (
        <>
          <Hero articles={articles} />
          <MoreStories articles={articles} />
        </>
      ) : (
        <Spinner />
      )}
    </main>
  );
}

export default Home;
