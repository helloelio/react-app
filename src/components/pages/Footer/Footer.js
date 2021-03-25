import React from 'react';
import './footer.css';
import gh from './gh.png';

const Footer = () => {
  return (
    <footer className="footer">
      <span>Build with React by</span>
      <a className="github" href="https://github.com/helloelio">
        {' '}
        <img src={gh} alt="" />
        helloelio
      </a>
    </footer>
  );
};

export default Footer;
