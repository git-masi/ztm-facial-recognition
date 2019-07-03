import React from 'react';
import styles from './Register.module.css';

const Register = props => {

  const onRouteChange = () => {
    props.onRouteChange('home');
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onRouteChange}>
        <fieldset>
          <legend>Register</legend>
          <div className={styles.formGroup}>
            <label htmlFor="name">name</label>
            <input type="name" name="name"/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">email</label>
            <input type="email" name="email"/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">password</label>
            <input type="text" name="password"/>
          </div>
        </fieldset>
          <input type="submit" value="Register"/>
      </form>
      {/* <button>Register</button> */}
    </div>
  )
}

export default Register;