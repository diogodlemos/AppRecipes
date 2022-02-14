import React from 'react';
import logoBrasa from '../images/carvão.png';
import logoInstagram from '../images/instagram.png';
import logoWpp from '../images/logowpp.png';
import logoGmail from '../images/logoGmail.png';
import '../Styles/Contact.css';


export default function Contact(props) {
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
    <div id="container-contacts">
      <h1 className="title-contact">Contatos:</h1>
      <div>
        <a
          className="link-contact"
          href="https://www.instagram.com/brasaecologica/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ logoInstagram }
            alt="instagram-brasa-ecológica"
            className="contact-logo"
          />
          <p className="color-contact">@brasaecologica</p>
        </a>
      </div>
      <div>
        <a 
          className="link-contact"
          href="http://web.whatsapp.com/send?phone=5531984418051"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ logoWpp }
            alt="whatsapp-brasa-ecológica"
            className="contact-logo"
          />
          <p className="color-contact">(31)984418051</p>
        </a>
      </div>
      <div>
        <a
          className="link-contact"
          href="https://accounts.google.com/b/0/AddMailService"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={ logoGmail }
            alt="email-brasa-ecológica"
            className="contact-logo"
          />
          <p className="color-contact">brasaecologica@gmail.com</p>
        </a>
      </div>
    </div>
  </div>
  )
}
