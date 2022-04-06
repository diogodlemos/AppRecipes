import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import likeIcon from '../images/blackHeartIcon.svg';
import FavoriteFilters from './FavoriteFilters';

function FavoriteCards() {
  const [favorites, setFavorites] = useState([]);
  const [localStorageChange, alterLocalStorageChange] = useState(false);
  const [copied, setCopied] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const handleUnfavorite = ({ target }) => {
    const { id } = target;
    const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newFavorites = localFavorites.filter((recipe) => recipe.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    alterLocalStorageChange((prevState) => !prevState);
  };

  const cardsMap = (array) => (
    array.map(({ id, type, area, category, alcoholicOrNot, name, image }, index) => (
      <div key={ id } className="favorite-card">
        <div data-testid={ `${index}-horizontal-card` } className="img-div">
          <Link to={ `/${type}s/${id}` }>
            <img
              src={ image }
              alt={ name }
              data-testid={ `${index}-horizontal-image` }
              className="favorite-card-img"
            />
          </Link>
        </div>
        <div data-testid={ `${index}-horizontal-top-text` } className="info-div">
          <p data-testid={ `${index}-horizontal-area` } className="favorite-top-text">
            { `${area} - ${category}` }
          </p>
          <p
            data-testid={ `${index}-horizontal-alcoholic` }
            className="favorite-bot-text"
          >
            { alcoholicOrNot }
          </p>
          <h4 data-testid={ `${index}-horizontal-name` }>{ name }</h4>
          <div className="btns-div">
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
              onClick={ () => {
                const timer = 2000;
                navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
                setCopied(true);
                setTimeout(() => setCopied(false), timer);
              } }
              src={ shareIcon }
              className="favorite-btns"
            >
              <img src={ shareIcon } alt="Share Icon" />
              { copied && <p>Link copiado!</p> }
            </button>
            <button
              type="button"
              data-testid={ `${index}-horizontal-favorite-btn` }
              id={ id }
              onClick={ handleUnfavorite }
              src={ likeIcon }
              className="favorite-btns"
            >
              <img id={ id } src={ likeIcon } alt="Like Icon" />
            </button>
          </div>
        </div>
      </div>
    ))
  );

  useEffect(() => {
    const localFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (localFavorites !== null && localFavorites !== undefined) {
      setFavorites(localFavorites);
    }
  }, [localStorageChange]);

  const handleFilters = ({ target }) => {
    const { name } = target;
    const types = {
      Todos: [],
      Comidas: (favorites.filter((recipe) => recipe.type === 'comida')),
      Bebidas: (favorites.filter((recipe) => recipe.type === 'bebida')),
    };
    const filters = document.getElementsByTagName('button');
    for (let index = 0; index < filters.length; index += 1) {
      filters[index].className = 'filter-item';
    }
    target.className = 'filter-item chosen';
    console.log('xablau');
    setFiltered(types[name]);
  };

  return (
    <div className="favorites-container">
      <div className="filters-container">
        <FavoriteFilters onClick={ handleFilters } text="Todos" />
        <FavoriteFilters onClick={ handleFilters } text="Comidas" />
        <FavoriteFilters onClick={ handleFilters } text="Bebidas" />
      </div>
      <div className="favorite-card-container">
        { !favorites.length > 0
        && <p className="none-favorite-text">Você não tem nenhuma receita favoritada</p> }
        { !filtered.length > 0 && favorites.length > 0 && cardsMap(favorites) }
        { filtered.length > 0 && cardsMap(filtered) }
      </div>
    </div>
  );
}

export default FavoriteCards;
