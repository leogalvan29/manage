import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.form}>
          <input type="text" name="" id="" />
          <a href="">
            {" "}
            <span>Go</span>{" "}
          </a>
        </div>
        <div className={styles.menu}>
          <nav className={styles.navegacion}>
            <a href="#first-section">Pricing</a>
            <a href="#section-2">Product</a>
            <a href="#about-us">About Us</a>
            <a href="#Careers">Careers</a>
            <a href="#Community">Community</a>
          </nav>
        </div>
        <div className={styles.icons}>
          <a href="#"><img src="/img/icon-facebook.svg" alt="" /></a>
          <a href="#"><img src="/img/icon-instagram.svg" alt="" /></a>
          <a href="#"><img src="/img/icon-pinterest.svg" alt="" /></a>
          <a href="#"><img src="/img/icon-twitter.svg" alt="" /></a>
          <a href="#"><img src="/img/icon-youtube.svg" alt="" /></a>
        </div>
        <div className={styles.logo_footer}>
            <img src="/img/logo.svg" alt="" />
        </div>
      </footer>
    </>
  );
}

export default Footer