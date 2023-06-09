import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import {
  getSelectedSource,
  fetchArticles,
  setTitleParams,
} from '../../articles/store/articlesSlice';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import MobileSearch from './MobileSearch';
import '../styles.css';

function Header() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const dispatch = useAppDispatch();
  const selectedSource = useAppSelector(getSelectedSource);

  function onSearch(searchTerm: string) {
    dispatch(setTitleParams(searchTerm));
    dispatch(fetchArticles({ selectedSource, titleParams: searchTerm }));
  }

  return (
    <header>
      <div className="header__background">
        <div className="header__container">
          <Link to="/">
            <h1>The Newspaper</h1>
          </Link>
          <div className="header__container__right">
            <p className="header__text">Bringing the latest news in one space.</p>
            {!toggleSearch && (
              <button
                onClick={() => setToggleSearch(!toggleSearch)}
                className="search__button__mobile"
              >
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
                  className="search__icon__mobile"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            )}
            <div className="searchbar__container__desktop">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>
        </div>
      </div>
      {toggleSearch && <MobileSearch onSearch={onSearch} />}
    </header>
  );
}

export default Header;
