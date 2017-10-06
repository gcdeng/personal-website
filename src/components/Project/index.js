import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './index.css';

class Project extends Component{
  render() {
    return (
      <section className="project">
        <Grid>
          <Row>
            <Col md={6} lg={6}>
              <ul className="project-list project-list-l">
                <li className="project-item">
                  <a href="">
                    <div className="project-img-container">
                      <img className="project-img" alt="project item"></img>
                    </div>
                  </a>
                  <a href="" className="project-title">Safedrink</a>
                  <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="project-tag"></div>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={6}>
              <ul className="project-list project-list-r">
                <li className="project-item">
                  <a href="">
                    <div className="project-img-container">
                      <img className="project-img" alt="project item"></img>
                    </div>
                  </a>
                  <a href="" className="project-title">Title</a>
                  <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="project-tag"></div>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Project;
