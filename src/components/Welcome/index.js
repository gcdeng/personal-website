import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './index.css';
import myPhoto from '../img/myPhoto.jpg';

class Welcome extends Component {
  render(){
    let offsetXMin=33;
    let offsetXMax=1.5;
    return(
      <section className="welcome">
        {/* <div className="banner"> */}
        <Grid>
            <ParallaxProvider>
              <Parallax
                className="custom-class"
                offsetYMax={550}
                offsetYMin={-200}
                slowerScrollRate={true}
              >
                <Row>
                  <Parallax
                    offsetXMax={-1*offsetXMax}
                    offsetXMin={offsetXMin}
                  >
                    <Col md={4} className="name-container">
                      <p className="name"> Hi, I'm Eric Deng</p>
                    </Col>
                  </Parallax>

                  <Col md={4}>
                  </Col>

                  <Parallax
                    offsetXMax={offsetXMax}
                    offsetXMin={-1*offsetXMin}
                  >
                    <Col md={4}>
                      <p className="title">a Frontend Developer</p>
                    </Col>
                  </Parallax>
                </Row>
              </Parallax>
            </ParallaxProvider>
        </Grid>
        {/* </div> */}
        {/* <div className="banner">
          <p className="name"> Hi, I'm Eric Deng</p>
          <div className="space"></div>
          <p className="title">Frontend Developer</p>
        </div> */}
      </section>
    );
  }
}

export default Welcome;
