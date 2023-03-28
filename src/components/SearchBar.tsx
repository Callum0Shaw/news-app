import React from 'react';

function SearchBar({ filter }) {
  return (
    <form className="search__container" on>
      <input
        type="text"
        name="search"
        className="search__input"
        id=""
        placeholder={`search ${filter.label || 'all'}...`}
      />
      <button type="submit" className="search__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="search__icon"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
