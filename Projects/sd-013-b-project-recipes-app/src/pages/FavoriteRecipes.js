import React from 'react';
import Header from '../Components/Header';
import FavoriteCards from '../Components/FavoritesCards';
import Footer from '../Components/Footer';

const FavoriteRecipes = () => (
  <div className="main-container">
    <Header title="Receitas Favoritas" containBtnSearch />
    <FavoriteCards />
    <Footer />
  </div>
);

export default FavoriteRecipes;
