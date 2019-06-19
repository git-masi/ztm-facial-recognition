import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'c73b0a1735814a7b8be81b3640ccf8a5'
});

class App extends Component {
  state = {
    input: '',
  }

  inputHandler = (e) => {
    console.log(e.target.value);
  }

  buttonSubmitHandler = () => {
    console.log('click');

    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
    .then(
      function(response) {
        // do something with response
        console.log(response);
      },
      function(err) {
        // there was an error
        console.log(err);
      }
    );
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