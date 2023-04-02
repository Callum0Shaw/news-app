import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTitleParams, setSource, fetchArticles } from '../store/articlesSlice';
import Select from 'react-select';
import SourceButton from './SourceButton';

function Sources() {
  const [activeSourceIndex, setActiveSourceIndex] = useState(null);

  const dispatch = useDispatch();
  const titleParams = useSelector(getTitleParams);

  function handleSourceChange(selectedSource) {
    dispatch(setSource(selectedSource));
    dispatch(fetchArticles({ selectedSource, titleParams }));
  }

  const sources = [
    { value: 'all', label: 'All' },
    { value: 'bbc-news', label: 'BBC' },
    { value: 'independent', label: 'Independent' },
    { value: 'politico', label: 'Politico' },
    { value: 'the-washington-post', label: 'The Washington Post' },
    { value: 'time', label: 'Time' },
    { value: 'reuters', label: 'Reuters' },
  ];

  return (
    <div className="sources__container">
      {sources.map((source, i) => (
        <SourceButton
          key={i}
          selectedSource={source}
          active={activeSourceIndex === i ? true : false}
          setActive={() => setActiveSourceIndex(i)}
          handleSourceChange={handleSourceChange}
        />
      ))}
      <Select
        options={sources}
        onChange={handleSourceChange}
        classNames={{ control: () => 'source__select' }}
      />
    </div>
  );
}

export default Sources;
