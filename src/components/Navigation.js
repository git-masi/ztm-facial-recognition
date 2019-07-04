import React from 'react';

const Navigation = props => {

  const navClickHandler = e => {
    if (e.target.dataset.name === 'signOut') {
      props.onRouteChange('home');
      props.signInHandler();
    } else if (e.target.dataset.name === 'signIn') {
      props.onRouteChange('signIn');
    } else {
      props.onRouteChange('register');
    }
  }

  if (props.isSignedIn === true) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p data-name="signOut" onClick={navClickHandler}>Sign Out</p>
      </nav>
    )
  } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p data-name="signIn" onClick={navClickHandler}>Sign In</p>
          <p data-name="register" onClick={navClickHandler}>Register</p>
        </nav>
      )
  }
}

export default Navigation;