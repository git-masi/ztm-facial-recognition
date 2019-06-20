import React from 'react';
import styles from './FacialRecognition.module.css';

const FacialRecognition = ({ imageURL, boxPix }) => {
  return (
    <div className={styles.container}>
      <img
        id="inputImage"
        className={styles.img}
        src={imageURL}
        alt="">
      </img>
      <div
        style={{
          left: boxPix[0],
          top: boxPix[1],
          right: boxPix[2],
          bottom: boxPix[3],
        }}
        className={styles.box}
      >
      </div>
    </div>
  )
}

export default FacialRecognition;