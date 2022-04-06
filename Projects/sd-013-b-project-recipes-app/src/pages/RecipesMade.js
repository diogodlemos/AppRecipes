import React from 'react';
import Header from '../Components/Header';
import DoneRecipesCards from '../Components/DoneRecipesCards';
import Footer from '../Components/Footer';

const RecipesMade = () => (
  <div>
    <Header title="Receitas Feitas" containBtnSearch />
    <DoneRecipesCards />
    <Footer />
  </div>
);

export default RecipesMade;
