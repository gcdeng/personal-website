import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './index.css';
import myPhoto from '../img/myPhoto.jpg';

class About extends Component {
  render(){
    return(
      <section className="about" id="about">
        <Grid>
          <Row>
            <div className="about-container">
              <ParallaxProvider>
                <Parallax
                    className="custom-class"
                    offsetYMax={20}
                    offsetYMin={-30}
                    slowerScrollRate={false}
                    tag="figure"
                >
                  <figure className="about-figure">
                    <img src={myPhoto} className="my-photo" alt="me"></img>
                  </figure>
                </Parallax>
              </ParallaxProvider>
              <ParallaxProvider>
                <Parallax
                  className="custom-class"
                  offsetYMax={20}
                  offsetYMin={-20}
                  slowerScrollRate={true}
                >
                  <div className="about-content">
                    <p>Hi, I'm <span className="its-me">Eric Deng</span>, a Frontend Developer living in Taipei, Taiwan.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </Parallax>
              </ParallaxProvider>
            </div>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default About;
