import React from 'react';
import styles from './SignInForm.module.css';

const SignInForm = props => {

  const onRouteChange = e => {
    if (e.target.name === 'register') {
      props.onRouteChange('register');
    } else {
      props.onRouteChange('home');
      props.signInHandler();
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={onRouteChange}>
        <fieldset>
          <legend>Sign In</legend>
          <div className={styles.formGroup}>
            <label htmlFor="email">email</label>
            <input type="email" name="email"/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">password</label>
            <input type="text" name="password"/>
          </div>
        </fieldset>
          <input type="submit" value="Sign In"/>
      </form>
      <button name="register" onClick={onRouteChange}>Register</button>
    </div>
  )
}

export default SignInForm;