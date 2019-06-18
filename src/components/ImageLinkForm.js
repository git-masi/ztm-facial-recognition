import React from 'react';
import styles from './ImageLinkForm.module.css';

const ImageLinkForm = () => {
  return (
    <div className={styles.container}>
      <p>Enter the URL of a picture and the app will detect human faces.</p>
      <div className={styles.inputContainer}>
        <input type="text"></input>
        <button>Detect!</button>
      </div>
    </div>
  )
}

export default ImageLinkForm;