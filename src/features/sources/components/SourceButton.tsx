import React from 'react';
import { Source } from '../types';
import '../styles.css'

interface SourceButtonProps {
  selectedSource: Source;
  active: boolean;
  setActive: () => void;
  handleSourceChange: (selectedSource: Source) => void;
}

function SourceButton({
  selectedSource,
  active,
  setActive,
  handleSourceChange,
}: SourceButtonProps) {
  function handleClick() {
    setActive();
    handleSourceChange(selectedSource);
  }

  return (
    <button
      className={`source__button ${active ? 'source__button__active' : ''}`}
      onClick={handleClick}
    >
      <p>{selectedSource.name}</p>
    </button>
  );
}

export default SourceButton;
