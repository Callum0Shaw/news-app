import Grid from './components/Grid';
import Header from './components/Header';
import Sources from './components/Sources';
import Hero from './components/Hero';
import MoreStories from './components/MoreStories';
import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data.json');
      const jsondata = await res.json();
      setArticles(jsondata.articles);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Grid />
      <Header />
      <main>
        <Sources />
        <Hero articles={articles} />
        <MoreStories articles={articles} />
      </main>
    </div>
  );
}

export default App;
