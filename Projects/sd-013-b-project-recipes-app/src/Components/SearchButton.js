import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function SearchButton() {
  const [hidden, setHidden] = useState(true);

  const handleSearchClick = () => {
    setHidden((prevState) => !prevState);
  };

  return (
    <div>
      <button
        data-testid="search-top-btn"
        onClick={ () => handleSearchClick() }
        type="button"
        src={ searchIcon }
        className="btn-search"
      >
        <img src={ searchIcon } alt="Icone de pesquisa" />
      </button>
      <div hidden={ hidden }>
        <SearchBar />
      </div>
    </div>
  );
}
