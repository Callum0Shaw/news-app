import React from 'react';

function SourceButton({ source, setSource }) {
  return (
    <button className="source__button" onClick={() => setSource(source)}>
      <p>{source.label}</p>
    </button>
  );
}

export default SourceButton;
