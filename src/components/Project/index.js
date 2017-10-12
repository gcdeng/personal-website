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
      {title:'Facebook Chatbot - TenkiBot', tag:'', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'#', imgSrc:'#'},
      {title:'NCTU Big Data', tag:'', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'', imgSrc:'#'},
      {title:'NCTU Artificial Intelligence', tag:'', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'', imgSrc:'#'}
    ];
    let projectListR = [
      {title:'SafeDrink', tag:'', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'https://bitbucket.org/smshen/safedrink/overview', imgSrc:'#'},
      {title:'Thesis - AQRA', tag:'', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'', imgSrc:'#'},
      {title:'NCTU Network Programming', tag:'', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'', imgSrc:'#'},
      {title:'NCTU Software Defined Network', tag:'', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', link:'', imgSrc:'#'}
    ];
    return (
      <section className="project" id="project">
        <Grid>
          <Row>
            <div className="project-container">
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
                  <div className="project-header">
                    <p>Projects</p>
                  </div>
                  {
                    projectListR.map((p, i)=>{
                      return (
                        <ProjectItem link={p.link} imgSrc={p.imgSrc} title={p.title} desc={p.desc} tag={p.tag} key={i}/>
                      )
                    })
                  }
                </ul>
              </Col>
            </div>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Project;
