import React from 'react';
import styles from './Rank.module.css';

const Rank = () => {
  return (
    <div className={styles.container}>
      <p>Your current rank is:</p>
      <h3>5</h3>
    </div>
  )
}

export default Rank;