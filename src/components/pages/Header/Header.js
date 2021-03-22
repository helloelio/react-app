import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/">home</a>
          </li>
          <li className="navigation__item">
            <a href="/main.js">about</a>
          </li>
          <li className="navigation__item">
            <a href="/">doc</a>
          </li>
          <li className="navigation__item">
            <a href="/">github</a>
          </li>
        </ul>
      </nav>
      <div className="header__content">
        <div className="header__main">
          <h1 className="header__title">Hello React</h1>
          <p className="header__subtitle">Первая работа с react</p>
        </div>
        <div className="support__header">
          <p className="header__subtitle">
            lfowepf digo[ne gjfdgrpem gffsdpg erl ppe emegmeor mpm pmfd
            ngzdngojf;'gjm jerj jope ahsiohfdiosneraen fvnfs
            io'gnreiongfo'zng'odg herio
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
