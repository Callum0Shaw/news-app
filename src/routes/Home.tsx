import Sources from '../components/Sources';
import Hero from '../components/Hero';
import MoreStories from '../components/MoreStories';
import { useEffect, useState } from 'react';
import { generateUniqueId } from '../utils/api';

function Home() {
  const [articles, setArticles] = useState([]);
  const [selectedSource, setSelectedSource] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data.json');
      const jsondata = await res.json();

      const articleArray = jsondata.articles.map((a) => ({ ...a, id: generateUniqueId() }));
      setArticles(articleArray);
    };
    fetchData();
  }, []);

  return (
    <main>
      <Sources setSelectedSource={setSelectedSource} />
      <Hero articles={articles} />
      <MoreStories articles={articles} />
    </main>
  );
}

export default Home;
