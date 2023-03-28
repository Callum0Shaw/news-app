import React from 'react';

function SourceButton({ source, setSource, active, setActive }) {
  function handleClick() {
    setSource(source);
    setActive();
  }

  return (
    <button
      className={`source__button ${active ? 'source__button__active' : ''}`}
      onClick={handleClick}
    >
      <p>{source.label}</p>
    </button>
  );
}

export default SourceButton;
