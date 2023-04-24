import React from 'react';
import SearchBar from './SearchBar';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
function MobileSearch({ onSearch }: SearchBarProps) {
  return (
    <div className="searchbar__container__mobile">
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default MobileSearch;
