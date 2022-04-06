import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import profileIcon from '../images/profileIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import favoritesIcon from '../images/blackHeartIcon.svg';

function Footer() {
  const divBtn = 'div-btn';
  const chosen = 'div-btn chosen';
  const url = window.location.pathname.replace('/', '');
  const [profileClass, setProfileClass] = useState(divBtn);
  const [exploreClass, setExploreClass] = useState(divBtn);
  const [favoriteClass, setFavoriteClass] = useState(divBtn);
  useEffect(() => {
    if (url === 'perfil') {
      setProfileClass(chosen);
    }
    if (url === 'explorar') {
      setExploreClass(chosen);
    }
    if (url === 'receitas-favoritas') {
      setFavoriteClass(chosen);
    }
  }, [setProfileClass, setExploreClass, setFavoriteClass, url]);

  return (
    <footer className="footer" data-testid="footer">
      <div data-testid="drinks-bottom-btn" className={ profileClass }>
        <Link to="/perfil" className="footer-btn">
          <img src={ profileIcon } alt="Profile Icon" className="footer-img" />
          <h3>Perfil</h3>
        </Link>
      </div>
      <div data-testid="explore-bottom-btn" className={ exploreClass }>
        <Link to="/explorar" className="footer-btn">
          <img src={ exploreIcon } alt="Explore Icon" className="footer-img" />
          <h3>Explorar</h3>
        </Link>
      </div>
      <div data-testid="favorites-bottom-btn" className={ favoriteClass }>
        <Link to="/receitas-favoritas" className="footer-btn">
          <img src={ favoritesIcon } alt="Favotites Icon" className="footer-img" />
          <h3>Favoritos</h3>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
