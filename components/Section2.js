import React from 'react'
import styles from '../styles/Section2.module.css'

const Section2 = () => {
  return (
    <>
      <div className={styles.section2}>
        <div className={styles.content_1}>
          <h1>What’s different about Manage?</h1>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.{" "}
          </p>
        </div>
        <div className={styles.content_2}>
            <div className={styles.card}>
                 <div className={styles.content_card}>
                       <div className={styles.content_title}>
                           <a href=""> <span>01</span> </a>
                       <h1>Track company-wide progress</h1> 
                       </div>
                       <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                 </div>
                 <div className={styles.content_card}>
                 <div className={styles.content_title}>
                 <a href=""> <span>02</span> </a>
                
                       <h1>Track company-wide progress</h1> 
                       </div>
                       <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                 </div>
                 <div className={styles.content_card}>
                 <div className={styles.content_title}>
                 <a href=""> <span>03</span> </a>
                       <h1>Track company-wide progress</h1> 
                       </div>
                       <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                 </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Section2