import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/react-app">home</a>
          </li>
          <li className="navigation__item">
            <a href="/react-app">about</a>
          </li>
          <li className="navigation__item">
            <a href="/react-app">doc</a>
          </li>
          <li className="navigation__item">
            <a href="https://github.com/helloelio">Github</a>
          </li>
        </ul>
      </nav>
      <div className="header__content">
        <div className="header__main">
          <h1 className="header__title">
            <span className="hello"> Hello</span> <br />
            my name is Gleb
          </h1>
          <p className="header__subtitle">
            I am learning <br />
            Frontend-development
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
