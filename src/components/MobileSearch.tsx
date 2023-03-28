import React from 'react';
import SearchBar from './SearchBar';

function MobileSearch({ filter }) {
  return (
    <div className="searchbar__container__mobile">
      <SearchBar filter={filter} />
    </div>
  );
}

export default MobileSearch;
