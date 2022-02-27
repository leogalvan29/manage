import React from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {

  

  return (
    <header className='contenedor'> 
      <div className={styles.fila}> 
          <div className={styles.logo}>
             <img src="/img/logo.svg" alt="" />
          </div>
          <nav className={styles.navegacion}>
          <a href="#first-section">Pricing</a>
          <a href="#section-2">Product</a> 
          <a href="#about-us">About Us</a> 
          <a href="#Careers">Careers</a> 
          <a href="#Community">Community</a>
          </nav> 
          <div className={styles.cta}>
           
            <a href="#"> <span>Get Started</span> </a>

          </div>

      </div> 


    </header>
  )
}

export default Header