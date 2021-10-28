/* eslint-disable arrow-body-style */
import React from 'react';
import LoginBtn from '../LoginBtn/LoginBtn';
import Logo from '../Logo/Logo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <LoginBtn />
    </div>
  );
};

export default Header;
