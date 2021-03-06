import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import '../styles/RecipesCards.css';
import RecipesContext from '../context/recipesContext';

function DrinksCards() {
  const maxLength = 12;
  const { drinks, search, drinksIngredients } = useContext(RecipesContext);

  if (drinks === null || drinks === undefined) {
    return global.alert(
      'Sinto muito, não encontramos nenhuma receita para esses filtros.',
    );
  }

  if (drinks.length === 1 && search === 'bar') {
    return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;
  }

  function drinksGenerateCards(item) {
    return (item.length > 0 ? item
      .map(({ idDrink, strDrinkThumb, strDrink, strCategory }, index) => (
        <Link
          key={ idDrink }
          to={ `/bebidas/${idDrink}` }
        >
          <div className="search-recipes-card" data-testid={ `${index}-recipe-card` }>
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid={ `${index}-card-img` }
              className="img-recipes-card"
            />
            <h3
              data-testid={ `${index}-card-name` }
              category={ strCategory }
              id={ idDrink }
              className="recipes-card-name"
            >
              { strDrink }
            </h3>
          </div>
        </Link>
      )).slice(0, maxLength) : <p>Carregando bebidas</p>);
  }

  return (
    <div>
      {drinksIngredients.length > 0
        ? drinksGenerateCards(drinksIngredients)
        : drinksGenerateCards(drinks) }
    </div>
  );
}

export default DrinksCards;
