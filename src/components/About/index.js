import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './index.css';
import myPhoto from '../img/myPhoto.jpg';

class About extends Component {
  render(){
    return(
      <section className="about" id="about">
        <div className={this.props.expanded? "img-container changeBg" : "img-container"}></div>
        <Grid>
          <Row>
            <Col xs={12} className={this.props.expanded? "mobile shrink" : "mobile expand"}>
              <a href="#about" className="title" onClick={()=>this.props.toggle('about')}>About</a>
            </Col>
          </Row>
          <Row>
            <Col md={6} className={this.props.expanded? null : "shrink"}>
                <ParallaxProvider>
                  <Parallax
                      offsetYMax={15}
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
            <Col md={6} className={this.props.expanded? null : "shrink"}>
              <div className="about-content">
                <p>Hello! My name is <span className="its-me">Deng, Guo-Chin</span>, or you can call me <span className="its-me">Eric</span>. I am a self-taught web developer from Taipei, Taiwan.</p>
                <p>I am experienced in both Frontend development (HTML5, CSS3, SASS, Javascript, React, Vue, jQuery, Bootstrap) and Backend development (Node, Python). I’m currently focusing on frontend development and building Javascript applications.</p>
                {/* <p>I am both driven and self-motivated, and I'm constantly experimenting with new techniques. I am passionate about web development, and strive to better myself as a developer.</p> */}
                <p>In my free time, I like to study, workout, cook, listen to music, play guitar, taste cuisines and coffee.</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default About;
