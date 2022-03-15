import React from 'react';
import './Footer.scss';
import Logo from '../assets/svg/logoSchool.svg';

export const Footer = () => {
  const nick = 'tyzikova';
  const name = 'Tatsiana Tuzava';
  const path = 'https://github.com/tyzikova';

  return (
    <footer>
      <div className="containerFooter">
        <a href={path}>
          <i className="fab fa-github"></i>
          {nick}
        </a>
        <span>{name}</span>
        <img className="imageLogo" src={Logo} alt="Rsschool" />
      </div>
    </footer>
  );
};
