import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { getTitleParams, setSource, fetchArticles } from '../../articles/store/articlesSlice';
import { getAllSources } from '../utils/api';
import Select from 'react-select';
import SourceButton from './SourceButton';
import { Source } from '../types';

function Sources() {
  const [activeSourceIndex, setActiveSourceIndex] = useState<number | null>(null);
  const [sources, setSources] = useState<Source[]>([]);

  const dispatch = useAppDispatch();
  const titleParams = useAppSelector(getTitleParams);

  useEffect(() => {
    const fetchSources = async () => {
      const data = await getAllSources();
      const allSources = data.map((source) => ({ id: source.id, name: source.name }));
      setSources(allSources);
    };
    fetchSources();
  }, [sources]);

  function handleSourceChange(selectedSource: Source) {
    dispatch(setSource(selectedSource));
    dispatch(fetchArticles({ selectedSource, titleParams }));
  }

  const highlightedSources: Source[] = [
    { id: 'all', name: 'All' },
    { id: 'bbc-news', name: 'BBC' },
    { id: 'independent', name: 'Independent' },
    { id: 'wired', name: 'Wired' },
    { id: 'the-washington-post', name: 'The Washington Post' },
    { id: 'time', name: 'Time' },
    { id: 'reuters', name: 'Reuters' },
  ];
  return (
    <div className="sources__container">
      {highlightedSources.map((source, i) => (
        <SourceButton
          key={i}
          selectedSource={source}
          active={activeSourceIndex === i ? true : false}
          setActive={() => setActiveSourceIndex(i)}
          handleSourceChange={handleSourceChange}
        />
      ))}
      <Select
        options={sources.map((source) => ({ value: source.id, label: source.name }))}
        onChange={(option) => {
          if (option) handleSourceChange({ id: option.value, name: option.label });
        }}
        classNames={{ control: () => 'source__select' }}
        placeholder={'All sources'}
      />
    </div>
  );
}

export default Sources;
