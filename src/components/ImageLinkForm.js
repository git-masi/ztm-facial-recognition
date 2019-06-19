import React from 'react';
import styles from './ImageLinkForm.module.css';

const ImageLinkForm = ({ inputHandler, buttonSubmitHandler}) => {
  return (
    <div className={styles.container}>
      <p>Enter the URL of a picture and the app will detect human faces.</p>
      <div className={styles.inputContainer}>
        <input type="text" onChange={inputHandler}></input>
        <button onClick={buttonSubmitHandler}>Detect!</button>
      </div>
    </div>
  )
}

export default ImageLinkForm;