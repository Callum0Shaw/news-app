import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { getArticlesBySource, getAllSources } from '../utils/api';
import SourceButton from './SourceButton';

function Sources({ setSelectedSource, setArticles }) {
  const [activeSourceIndex, setActiveSourceIndex] = useState(null);

  const sources = [
    { value: 'all', label: 'All' },
    { value: 'bbc-news', label: 'BBC' },
    { value: 'independent', label: 'Independent' },
    { value: 'politico', label: 'Politico' },
    { value: 'the-washington-post', label: 'The Washington Post' },
    { value: 'time', label: 'Time' },
    { value: 'reuters', label: 'Reuters' },
  ];

  // Set user selected source and fetch articles with stated source.
  function handleChange(selectedOption) {
    setSelectedSource(selectedOption);
    getArticlesBySource(selectedOption.value).then((res) => setArticles(res));
  }

  // Same as above, but reset activeIndex.
  function handleSelectChange(selectedOption) {
    setSelectedSource(selectedOption);
    getArticlesBySource(selectedOption.value).then((res) => setArticles(res));
    setActiveSourceIndex(null);
  }

  return (
    <div className="sources__container">
      {sources.map((source, i) => (
        <SourceButton
          key={i}
          source={source}
          setSource={handleChange}
          active={activeSourceIndex === i ? true : false}
          setActive={() => setActiveSourceIndex(i)}
        />
      ))}
      <Select
        options={sources}
        onChange={handleSelectChange}
        classNames={{ control: () => 'source__select' }}
      />
    </div>
  );
}

export default Sources;
