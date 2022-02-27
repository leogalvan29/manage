import React from 'react'
import styles from  '../styles/Testimonials.module.css'

const Testimonials = () => {
  return (
    <>
      <div className={styles.contenedor_card}>
        <h1 className={styles.titulo}>What they've said</h1>
        <div className={styles.card_body}>
          <div className={styles.card_content}>
            <img src="/img/avatar-anisha.png" alt="" />
            <h2>Ali Bravo</h2>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <a href="#">
            {" "}
            <span>Get Started</span>{" "}
          </a>
        </div>
      </div>
      <div className={styles.contenedor_card_desktop}>
        <div className={styles.card_body_desktop}>
          <div className={styles.card_content}>
            <img src="/img/avatar-anisha.png" alt="" />
            <h2>Ali Bravo</h2>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          
        </div>
        <div className={styles.card_body_desktop}>
          <div className={styles.card_content}>
            <img src="/img/avatar-anisha.png" alt="" />
            <h2>Ali Bravo</h2>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          
        </div>
        <div className={styles.card_body_desktop}>
          <div className={styles.card_content}>
            <img src="/img/avatar-anisha.png" alt="" />
            <h2>Ali Bravo</h2>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Testimonials