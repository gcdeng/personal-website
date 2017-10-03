import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';
import './index.css';
import myPhoto from './img/myPhoto.jpg';
import fbIcon from './img/facebook.svg';
import igIcon from './img/instagram.svg';
import githubIcon from './img/github.svg';
import bitbucketIcon from './img/bitbucket.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Eric Deng</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/about">about</NavItem>
              <NavItem eventKey={2} href="/work">work</NavItem>
              <NavItem eventKey={3} href="/project">project</NavItem>
              <NavItem eventKey={4} href="/blog">blog</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <section className="welcome">
          <h1 className="name">Eric Deng</h1>
          <p className="title">Frontend Developer</p>
        </section>
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
        <section className="work">
          <ul className="timeline">
            <li>
              <div className="direction-r">
          			<div className="flag-wrapper">
          				<span className="flag">QNAP</span>
          			</div>
                <div className="time-wrapper">
                  <span className="time">2017/12 - present</span>
                </div>
          			<div className="desc">Frontend Developer</div>
          		</div>
            </li>
            <li>
              <div className="direction-l">
          			<div className="flag-wrapper">
          				<span className="flag">National Chiao Tung University (NCTU)</span>
          			</div>
                <div className="time-wrapper">
                  <span className="time">2015/09/14 - 2017/09/04</span>
                </div>
          			<div className="desc">Institute of Computer Science and Engineering</div>
          		</div>
            </li>
          </ul>

        </section>
        <section className="project">
          <h1>Projects</h1>
          <h1>Leetcode</h1>

        </section>
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
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './style.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
