import React from 'react';
import logoBrasa from '../images/carvão.png';

export default function Work(props) {
  const { history } = props;
  return (
    <div>
      <header className="header-brasa">
        <img
          id="logo-header"
          src={ logoBrasa }
          alt="brasa"
        />
        <h1 className="bonine">Brasa Ecológica</h1>
        <nav>
          <ul className="nav-brasa">
            <li
              className="nav-item"
              onClick={ () => history.push('/') }
            >
              Sobre
            </li>
            <li
              className="nav-item"
              onClick={ () => history.push('/products') }
            >
              Produtos
            </li>
            <li
              className="nav-item"
              onClick={ () => { history.push('/orders') }}
            >
              Pedidos
            </li>
            <li
              className="nav-item"
              onClick={ () => { history.push('/work') }}
            >
              Trabalhe conosco
            </li>
            <li
              className="nav-item"
              onClick={ () => { history.push('/contact') }}
            >
              Contatos
            </li>
          </ul>
        </nav>
      </header>
      Página Trabalhe conosco
    </div>
  )
}
