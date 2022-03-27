import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
      <header className={s.header}>
        <img
          src="https://flyclipart.com/thumb2/png-logo-design-transparent-logo-design-images-489321.png"
          alt="logo"
        ></img>
      </header>
    );
}

export default Header;