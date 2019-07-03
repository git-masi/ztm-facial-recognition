import React from 'react';

const Navigation = props => {

  const onRouteChange = () => {
    props.onRouteChange('signIn');
  }

  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={onRouteChange}>Sign Out</p>
    </nav>
  )
}

export default Navigation;