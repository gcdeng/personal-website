import React, {Component} from 'react';
import './index.css';

class Welcome extends Component {
  render(){
    return(
      <section className="welcome">
        <h1 className="name">Eric Deng</h1>
        <p className="title">Frontend Developer</p>
      </section>
    );
  }
}

export default Welcome;
