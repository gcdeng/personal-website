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
          <Row className="about-container">
            <Col md={6}>
              <ParallaxProvider>
                <Parallax
                    offsetYMax={20}
                    offsetYMin={-20}
                    slowerScrollRate={true}
                    tag="figure"
                >
                  <figure className="about-figure">
                    <img src={myPhoto} className="my-photo" alt="me"></img>
                  </figure>
                </Parallax>
              </ParallaxProvider>
            </Col>
            <Col md={6}>
              <div className="about-content">
                <p>Hello! My name is <span className="its-me">Guo Qin Deng</span>, or you can call me <span className="its-me">Eric</span>. I am a self-taught web developer from Taipei, Taiwan.</p>
                <p>I am experienced in both Frontend development (HTML5, CSS3, SASS, Javascript, jQuery, React, Bootstrap) and Backend development (Node, Python). I’m currently focusing on frontend development and building Javascript applications.</p>
                <p>I am both driven and self-motivated, and I'm constantly experimenting with new techniques. I am passionate about web development, and strive to better myself as a developer.</p>
                <p>In my free time, I like to study, workout, listen to music, play guitar, taste cuisines and coffee.</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default About;
