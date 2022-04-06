import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import LoginContext from '../context/LoginContext';
import appIcon from '../images/appIcon.png';

export default function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordMinimumLength = 6;
    if (emailRegex.test(email) && password.length > passwordMinimumLength) {
      setDisabled(false);
    }
  }, [email, password]);

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/comidas');
  };

  return (
    <section className="login-container">
      <div className="title-container">
        <img src={ appIcon } alt="App Icon" className="app-icon" />
        <p className="app-title">App de Recitas!</p>
      </div>
      <div className="title-input-container">
        <input
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          placeholder="Email"
          className="login-input"
        />
        <input
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          placeholder="Senha"
          className="login-input"
        />
        <button
          type="button"
          disabled={ disabled }
          data-testid="login-submit-btn"
          onClick={ handleClick }
          className="login-btn"
        >
          Entrar
        </button>
      </div>
    </section>
  );
}
