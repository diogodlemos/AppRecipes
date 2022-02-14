import React from 'react'
// import Header from '../componentes/Header'
import logoBrasa from '../images/carvão.png';
import '../Styles/Products.css';


export default function Products(props) {
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
      <h1 className="bonine">Produtos:</h1>
      <div className="products">
        <h2>Carvão Brasa Ecológica - 3Kg</h2>
        <img
          src="https://www.opshop.com.br/images/fotos/carvao-ecologico-3kg-brasa-ecologica-1064-miniatura-608.png"
          alt="pacote-pequeno"
        />
        <p>A melhor qualidade Brasa Ecológica em soluções de embalagem que tornam o produto acessível para todo tipo de negócio. Espécies de lenha de alta densidade como Acácia Negra e alguns tipos de Eucalipto são selecionadas para a produção dessa linha (conforme unidade produtiva), com atenção ao tamanho de peças e para otimização de performance na churrasqueira e em vendas.</p>
      </div>
    </div>
  )
}
