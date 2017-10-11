import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';
import myPhoto from '../img/myPhoto.jpg';

class About extends Component {
  render(){
    return(
      <section className="about" id="about">
        <Grid>
          <Row>
            <figure className="about-figure">
              <img src={myPhoto} className="my-photo" alt="me"></img>
            </figure>
            <div className="about-content">
              <p>Hi, I'm <span className="its-me">Eric Deng</span>, a Frontend Developer living in Taipei, Taiwan.</p>
            </div>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default About;
