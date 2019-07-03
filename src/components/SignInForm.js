import React from 'react';
import styles from './SignInForm.module.css';

const SignInForm = props => {

  const onRouteChange = () => {
    props.onRouteChange('home');
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
      <button>Register</button>
    </div>
  )
}

export default SignInForm;