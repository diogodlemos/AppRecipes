import React from 'react'
import logoBrasa from '../images/IMG_0219.png';
import '../Styles/Initial.css';


export default function Initial(props) {
  const { history } = props;
  return (
    <div id="container-main">
      <div className="initial-page">
        <img
          id="main-logo"
          src={ logoBrasa }
          alt="Brasa-ecologic"
        />
      </div>
      <div id="show">
        <h1 id="title-main">
          Brasa Ecológica:
        </h1>
        <p id="abstract">
          Empresa especialista em produção de carvão vegetal, com preocupação na preservação do meio ambiente e fornecedora do melhor carvão para o seu churrasco.
        </p>
        <button
          type="button"
          className="bonine-brasa"
          onClick={ () => { history.push('/home') } }
        >
          Saiba mais
        </button>
      </div>
    </div>
  )
}
