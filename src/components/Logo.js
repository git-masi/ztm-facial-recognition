import React from 'react';
import Tilt from 'react-tilt'
import logo from '../assets/images/artificial-intelligence.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Tilt className={styles.tilt} options={{ max : 45 }} style={{ height: 150, width: 150 }} >
        <div className={styles.tiltInner}><img src={logo} alt="logo"></img></div>
      </Tilt>
    </div>
  )
}

export default Logo;