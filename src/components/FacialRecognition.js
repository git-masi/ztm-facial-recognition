import React from 'react';

const FacialRecognition = props => {
  const coords = Object.values(props.boxCoord);
  console.log(coords);
  return (
    <div style={{
      margin: '1rem auto',
      height: '300px',
      width: '300px',
    }}>
      <img
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
        src={props.imageURL}
        alt="">
      </img>
    </div>
  )
}

export default FacialRecognition;