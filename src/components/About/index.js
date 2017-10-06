import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';
import myPhoto from '../img/myPhoto.jpg';

class About extends Component {
  render(){
    return(
      <section className="about">
        <Grid>
          <Row>
            <Col md={6} lg={6}>
              <figure className="about-figure">
                <img src={myPhoto} className="my-photo" alt="me"></img>
              </figure>
            </Col>
            <Col md={6} lg={6}>
              <div className="about-content">
                <p>Hi, I'm <span className="its-me">Eric Deng</span>, a Frontend Developer living in Taipei, Taiwan.</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default About;
