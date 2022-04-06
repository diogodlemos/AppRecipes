import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../styles/Explore.css';

function Explore() {
  // ref pra usar o history em componentes funionais: https://www.codegrepper.com/code-examples/javascript/redirect+onclick+react
  const history = useHistory();

  const handleCLick = ({ target: { name } }) => history.push(`/explorar/${name}`);

  return (
    <div className="explore-container">
      <Header title="Explorar" />
      <div className="explore-buttons">
      <button
        className="explore-food-button"
        type="button"
        name="comidas"
        onClick={ handleCLick }
        data-testid="explore-food"
      >
       Explorar Comidas
      </button>

      <button
        className="explore-drinks-button"
        type="button"
        name="bebidas"
        onClick={ handleCLick }
        data-testid="explore-drinks"
      >
        Explorar Bebidas
      </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
