import React from 'react';

const FacialRecognition = props => {
  return (
    <div style={{
      margin: '1rem',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <img src={props.imageURL} alt=""></img>
    </div>
  )
}

export default FacialRecognition;