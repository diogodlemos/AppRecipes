import React from 'react';
import { useHistory } from 'react-router';
import '../styles/Header.css';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';

function Header({ title }) {
  const history = useHistory();
  const { pathname } = history.location;
  if (pathname === '/comidas' || pathname === '/bebidas') {
    return (
      <header className="header">
        <h1 data-testid="page-title">{title}</h1>
        <SearchButton />
      </header>
    );
  }
  return (
    <header className="header">
      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
