import React, { Component } from 'react';
import './index.css';
import Navigation from '../Navigation';
import Welcome from '../Welcome';
import About from '../About';
import Work from '../Work';
import Project from '../Project';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Welcome/>
        <About/>
        <Work/>
        <Project/>
        <Footer/>
      </div>
    );
  }
}

export default App;
