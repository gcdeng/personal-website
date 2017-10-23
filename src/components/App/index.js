import React, { Component } from 'react';
import './index.css';
import Navigation from '../Navigation';
import Welcome from '../Welcome';
import About from '../About';
import Work from '../Work';
import Project from '../Project';
import Footer from '../Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      aboutExpanded: true,
      workExpanded: false,
      projectExpanded: false
    }
  }

  handleToggle = (e) => {
    if (e==='about') {
      this.setState({
        aboutExpanded: true,
        workExpanded: false,
        projectExpanded: false
      })
    }
    else if(e==='work'){
      this.setState({
        aboutExpanded: false,
        workExpanded: true,
        projectExpanded: false
      })
    }
    else if (e==='project') {
      this.setState({
        aboutExpanded: false,
        workExpanded: false,
        projectExpanded: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Welcome/>
        <About expanded={this.state.aboutExpanded} toggle={this.handleToggle}/>
        <Work expanded={this.state.workExpanded} toggle={this.handleToggle}/>
        <Project expanded={this.state.projectExpanded} toggle={this.handleToggle}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
