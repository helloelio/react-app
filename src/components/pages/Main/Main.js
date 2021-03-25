import React from 'react';
import Skills from '../Skills/Skills';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <h2 className="main__title">My stack technology</h2>
      <ul className="main__list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
      </ul>
      <Skills />
    </main>
  );
}

export default Main;
