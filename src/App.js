import React, { Component, Fragment } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import SignInForm from './components/SignInForm';
import Register from './components/Register';
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
    boxPix: [],
    route: 'signIn',
  }

  inputHandler = (e) => {
    this.setState({input: e.target.value});
  }

  calcFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    // get image dimensions, may change in future
    const img = document.getElementById('inputImage');
    const height = Number(img.clientHeight);
    const width = Number(img.clientWidth);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  getPixels = obj => {
    const arr = Object.values(obj);
    const boxPix = arr.map(val => `${val}px`);
    this.setState({boxPix});
  }

  buttonSubmitHandler = () => {
    this.setState({imageURL: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.getPixels(this.calcFaceLocation(response)))
    .catch(err => console.log(err))
  }

  onRouteChange = val => {
    this.setState({ route: val });
  }

  render () {
    const { route } = this.state;
    let display;
    if (route === 'signIn') {
      display = <SignInForm onRouteChange={this.onRouteChange}/>;
    } else if (route === 'register') {
      display = <Register onRouteChange={this.onRouteChange}/>;
    } else {
      display =
        <Fragment>
          <Logo />
          <Rank />
          <ImageLinkForm
            inputHandler={this.inputHandler}
            buttonSubmitHandler={this.buttonSubmitHandler}
          />
          <FacialRecognition
            imageURL={this.state.imageURL}
            boxPix={this.state.boxPix}
          />
        </Fragment>
    }

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
        <Navigation onRouteChange={this.onRouteChange}/>
        { display }
      </div>
    );
  }
}

export default App;