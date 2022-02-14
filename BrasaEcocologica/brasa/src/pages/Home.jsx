import React from 'react';
import '../Styles/Home.css';
import logoBrasa from '../images/carvão.png';

export default function Home(props) {
  const { history } = props;
  return (
    <div>
      <header className="header-brasa">
        <img
          id="logo-header"
          src={ logoBrasa }
          alt="brasa"
          onClick={ () => history.push('/') }
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
      <div id="container-about">
        <h1 className="bonine">A Empresa:</h1>
        <p id="about-brasa">A empresa Brasa Ecologica, que tem a razão social BRASA ECOLOGICA OLIVEIRA LTDA, está presente no segmento de Lojas de Departamentos e foi fundada em 09/10/2018. A empresa está localizada na Fazenda Coelhos Furquim, SN, no bairro Zona Rural, em Mariana-MG, CEP 35420-000.</p>
      </div>
    </div>
  )
}
