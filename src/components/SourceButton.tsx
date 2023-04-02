import React from 'react';

function SourceButton({ selectedSource, active, setActive, handleSourceChange }) {
  function handleClick() {
    setActive();
    handleSourceChange(selectedSource)
  }

  return (
    <button
      className={`source__button ${active ? 'source__button__active' : ''}`}
      onClick={handleClick}
    >
      <p>{selectedSource.label}</p>
    </button>
  );
}

export default SourceButton;
