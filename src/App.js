import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FacialRecognition from './components/FacialRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'c73b0a1735814a7b8be81b3640ccf8a5'
});

class App extends Component {
  state = {
    input: '',
    imageURL: '',
    boxCoord: {},
  }

  inputHandler = (e) => {
    this.setState({input: e.target.value});
  }

  calcFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    this.setState({boxCoord: clarifaiFace});
  }

  buttonSubmitHandler = () => {
    this.setState({imageURL: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.calcFaceLocation(response))
    .catch(err => console.log(err))
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
        <FacialRecognition
          imageURL={this.state.imageURL}
          boxCoord={this.state.boxCoord}
        />
      </div>
    );
  }
}

export default App;