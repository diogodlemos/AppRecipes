import React from 'react';
import logoBrasa from '../images/carvão.png';
import '../Styles/Orders.css';

export default function Orders(props) {
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
      <div id="form-orders">
        <h1 className="bonine">Pedidos:</h1>
        <label htmlFor="carvao">
          Selecione o produto:
          <select name="carvao" id="carvao">
            <option value="tres">Carvão Brasa Ecológica - 3kg</option>
            <option value="dez">Carvão Brasa Ecológica - 10kg</option>
          </select>
        </label>
        <label htmlFor="">
          Informe a quantidade de pacotes:
          <input type="number" />
        </label>
        <label>
          Informe a cidade:
          <select>
            <option value="">Ouro Branco - MG</option>
            <option value="">Congonhas - MG</option>
            <option value="">Ouro Preto - MG</option>
            <option value="">Mariana - MG</option>
            <option value="">Furquim - MG</option>
            <option value="">Itabirito - MG</option>
          </select>
        </label>
        <label>
          Rua:
          <input type="text" />
        </label>
        <label>
          Bairro:
          <input type="text" />
        </label>
        <label>
          Número:
          <input type="number" />
        </label>
        <button
          type="button"
          className="bonine-brasa"
          // onClick={ () => { history.push('/home') } }
        >
          Finalizar
        </button>        
      </div>
    </div>
  )
}
