import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Profile(props) {
  function getEmail() {
    if (localStorage.getItem('user')) {
      const userString = localStorage.getItem('user');
      const user = JSON.parse(userString);
      const { email } = user;
      return email;
    } return '';
  }
  const { history } = props;
  return (
    <div className="main-container">
      <Header title="Perfil" containBtnSearch />
      <div className="profile-container">
        <p data-testid="profile-email" className="profile-email">{ getEmail() }</p>

        <button
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => { history.push('/receitas-feitas'); } }
          className="input-btn"
        >
          Receitas Feitas
        </button>

        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => { history.push('/receitas-favoritas'); } }
          className="input-btn"
        >
          Receitas Favoritas
        </button>

        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ () => {
            history.push('/');
            localStorage.clear();
          } }
          className="input-btn"
        >
          Sair
        </button>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
