import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import './index.css';


import fbIcon from '../img/facebook.svg';
import igIcon from '../img/instagram.svg';
import githubIcon from '../img/github.svg';
import bitbucketIcon from '../img/bitbucket.svg';

class Footer extends Component {

  render(){
    return (
      <footer>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="email">
                <p>ericdenggc@gmail.com</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ul className="footer-social">
                <li><a href="https://www.facebook.com/frederickdeng" target="_blank"><img className="icon" src={fbIcon} alt="facebook"></img></a></li>
                <li><a href="https://www.instagram.com/frederick_deng/" target="_blank"><img className="icon" src={igIcon} alt="instagram"></img></a></li>
                <li><a href="https://github.com/gcdeng" target="_blank"><img className="icon" src={githubIcon} alt="github"></img></a></li>
                <li><a href="https://bitbucket.org/gcdeng/" target="_blank"><img className="icon" src={bitbucketIcon} alt="bitbucket"></img></a></li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
