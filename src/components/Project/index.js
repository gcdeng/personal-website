import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProjectItem from './ProjectItem';
import './index.css';

class Project extends Component{
  // constructor(){
  //   super();
  // }

  render() {
    let projectListL = [
      {title:'Title', tag:'#', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'#', imgSrc:'#'}
    ];
    let projectListR = [
      {title:'Title2', tag:'#', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'#', imgSrc:'#'}
    ];
    return (
      <section className="project">
        <Grid>
          <Row>
            <Col md={6} lg={6}>
              <ul className="project-list project-list-l">
                {
                  projectListL.map((p, i)=>{
                    return (
                      <ProjectItem link={p.link} imgSrc={p.imgSrc} title={p.title} desc={p.desc} tag={p.tag} key={i}/>
                    )
                  })
                }
              </ul>
            </Col>
            <Col md={6} lg={6}>
              <ul className="project-list project-list-r">
                {
                  projectListR.map((p, i)=>{
                    return (
                      <ProjectItem link={p.link} imgSrc={p.imgSrc} title={p.title} desc={p.desc} tag={p.tag} key={i}/>
                    )
                  })
                }
              </ul>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Project;
