import Sources from '../components/Sources';
import Hero from '../components/Hero';
import MoreStories from '../components/MoreStories';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getAllArticles } from '../utils/api';

function Home() {
  const [articles, setArticles] = useState([]);
  const [selectedSource, setSelectedSource] = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      const articleArray = await getAllArticles();
      setArticles(articleArray);
    };
    fetchData();
  }, []);

  return (
    <main>
      <Sources setSelectedSource={setSelectedSource}  setArticles={setArticles}/>
      <Hero articles={articles}  selectedSource={selectedSource}/>
      <MoreStories articles={articles} />
    </main>
  );
}

export default Home;
