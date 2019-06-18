import React from 'react';
import Tilt from 'react-tilt'
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Tilt className={styles.tilt} options={{ max : 45 }} style={{ height: 150, width: 150 }} >
        <div className={styles.tiltInner}> <span role="img" aria-label="just an alien emoji">👽</span></div>
      </Tilt>
    </div>
  )
}

export default Logo;