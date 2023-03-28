import React, { useState, useContext } from 'react';
import Select from 'react-select';
import SourceButton from './SourceButton';

function Sources({ setSelectedSource }) {
  const sources = [
    { value: 'bbc', label: 'BBC' },
    { value: 'the-times', label: 'The Times' },
    { value: 'the-economist', label: 'The Economist' },
    { value: 'ft', label: 'FT' },
    { value: 'the-guardian', label: 'The Guardian' },
    { value: 'reuters', label: 'Reuters' },
  ];

  function handleChange(selectedOption) {
    setSelectedSource(selectedOption.label);
  }

  return (
    <div className="sources__container">
      {sources.map((source) => (
        <SourceButton source={source} setSource={handleChange} key={source.value} />
      ))}
      <Select
        options={sources}
        onChange={handleChange}
        classNames={{ control: () => 'source__select' }}
      />
    </div>
  );
}

export default Sources;
