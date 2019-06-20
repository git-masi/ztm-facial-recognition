import React from 'react';
import styles from './FacialRecognition.module.css';

const FacialRecognition = props => {
  const coords = Object.values(props.boxCoord);
  console.log(coords);
  const absPos = coords.map(val => `${val * 300}px`);
  console.log(absPos);
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={props.imageURL}
        alt="">
      </img>
      <div
        style={{
          top: absPos[0],
          left: absPos[1],
          bottom: absPos[2],
          right: absPos[3]
        }}
        className={styles.box}
      >
      </div>
    </div>
  )
}

export default FacialRecognition;