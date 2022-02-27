import React from 'react'
import Image from 'next/image'
import styles from '../styles/Section1.module.css'


const Section1 = () => {
  return (
    <>
      <main className="contenedor section_1_1">
        <div className={styles.fila}>
          <div className={styles.content_1}>
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <a href="#"> <span>Get Started</span> </a>
          </div> 
         
          <img
            layout="responsive"
            src="/img/illustration-intro.svg"
            width={400}
            height={400}
            alt=""
          /> 

<div className={styles.content_1_mobile}>
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <a href="#"> <span>Get Started</span> </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Section1