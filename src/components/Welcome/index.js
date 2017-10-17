import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './index.css';

class Welcome extends Component {
  render(){
    return(
      <section className="welcome">
        <ParallaxProvider>
          <Parallax
            className="custom-class"
            offsetYMax={800}
            offsetYMin={-800}
            slowerScrollRate={true}
          >
            <p className="title">Hi, I'm Eric, a Frontend Web Developer.</p>
          </Parallax>
        </ParallaxProvider>
      </section>
    );
  }
}

export default Welcome;
