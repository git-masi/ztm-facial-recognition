import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import './App.css';

class App extends Component {
  state = {
    input: '',
  }

  inputHandler = (e) => {
    console.log(e.target.value);
  }

  buttonSubmitHandler = () => {
    console.log('click');
  }

  render () {
    return (
      <div className="App">
         <Particles
            className="particleStyles"
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 400,
                  }
                }
              }
            }} 
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          inputHandler={this.inputHandler}
          buttonSubmitHandler={this.buttonSubmitHandler}
        />
        {/* <FacialRecognition /> */}
      </div>
    );
  }
}

export default App;