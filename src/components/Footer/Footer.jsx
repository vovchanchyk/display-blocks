/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link1</a>
        <a href='#'>Link2</a>
        <a href='#'>Link</a>
        <a href='#'>Link3</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
      </div>
      <div className={styles.footer__copy}>
        <p>@ Copyright. Company name. 2021</p>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
