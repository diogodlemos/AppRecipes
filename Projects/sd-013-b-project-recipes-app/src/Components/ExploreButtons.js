import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchRandomMeal, fetchRandomDrink } from '../services/randomRecipeAPI';
import '../styles/Explore.css';

function ExploreButtons() {
  const url = window.location.pathname.replace('/explorar/', '');
  const history = useHistory();

  const [randomMeal, setRandomMeal] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
    const getRandomMeal = async () => {
      const data = await fetchRandomMeal();
      setRandomMeal(data);
    };

    const getRandomDrink = async () => {
      const data = await fetchRandomDrink();
      setRandomDrink(data);
    };

    getRandomDrink();
    getRandomMeal();
  }, []);

  const handleSurpriseClick = () => {
    if (url === 'comidas') history.push(`/${url}/${randomMeal[0].idMeal}`);
    if (url === 'bebidas') history.push(`/${url}/${randomDrink[0].idDrink}`);
  };

  const handleCLick = ({ target: { name } }) => history.push(`/explorar/${url}/${name}`);
  const handleSearch = ({ target: { name } }) => history.push(`/${name}`);

  if (url === 'comidas') {
    return (
      <div className="explore-buttons">
        <button
          className="search-button"
          type="button"
          name="comidas"
          onClick={ handleSearch }
        >
          Pesquisar
        </button>
        <button
          className="explore-meal-ingredient"
          type="button"
          name="ingredientes"
          onClick={ handleCLick }
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>

        <button
          className="explore-meal-area"
          type="button"
          name="area"
          onClick={ handleCLick }
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>

        <button
          className="meal-surprise-me"
          type="button"
          name="surprise"
          onClick={ handleSurpriseClick }
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </div>
    );
  }

  if (url === 'bebidas') {
    return (
      <div className="explore-buttons">
        <button
          className="search-button"
          type="button"
          name="bebidas"
          onClick={ handleSearch }
        >
          Pesquisar
        </button>
        <button
          className="explore-drink-ingredient"
          type="button"
          name="ingredientes"
          onClick={ handleCLick }
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>

        <button
          className="drink-surprise-me"
          type="button"
          name="surprise"
          onClick={ handleSurpriseClick }
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </div>
    );
  }
}

export default ExploreButtons;
