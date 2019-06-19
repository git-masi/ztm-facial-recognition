import React from 'react';
import styles from './ImageLinkForm.module.css';

const app = 'c73b0a1735814a7b8be81b3640ccf8a5';

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