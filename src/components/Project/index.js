import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ProjectItem from './ProjectItem';
import './index.css';

class Project extends Component{
  // constructor(){
  //   super();
  // }

  render() {
    let projectList = [
      {title:'SafeDrink', tag:'React', desc:"In order to improve drink safety, we rate for drink according to its ingredient, inspection report, packaging material. Users also can comment on each drink. It is a cooperation project created by five people, I'm responsible for frontend development.", link:'https://bitbucket.org/smshen/safedrink/overview', imgSrc:'#'},
      {title:'TenkiBot', tag:'Javascript', desc:"A facebook chatbot for search and regular notice the weather, the data are sourced from CWB.", link:'https://bitbucket.org/gcdeng/tenkibot/overview', imgSrc:'#'},
      // {title:'Thesis - AQRA', tag:"Python/RYU/Mininet", desc:"We propose an application-aware QoS routing algorithm (AQRA) for SDN-based IoT networking to guarantee multiple QoS requirements of high-priority IoT applications and to adapt to the current network status for better routing paths.", link:'', imgSrc:'#'},
      {title:'Stock analysis based on borker datasets', tag:'Python/scikit-learn/spark', desc:"Analyze stock and broker datasets by data mining techniques to find out the investment strategy.", link: null, imgSrc:'#'},
      {title:'Battle City Game with AI agent', tag:'Python', desc:"Design an agent as the player in Battle City Game to move tank and destroy the enemy tanks.", link:"https://github.com/gcdeng/AI_project_battle_city", imgSrc:'#'},
      {title:'NCTU Network Programming', tag:'C', desc:"The curriculum includes Unix Programming, Socket Programming, Internet and Distributed Information Systems. There are four subprojects:", link: null, imgSrc:'#', list: [
        {item: "rsh-like remote access system.", link: null},
        {item: "chat-like system using shared memory and single process.", link: "https://bitbucket.org/gcdeng/np_project2_0456057/overview"},
        {item: "remote batch system using CGI, http server and winsock.", link: "https://bitbucket.org/gcdeng/np_project3_0456057/overview"},
        {item: "SOCKS server, implement the SOCKS 4 firewall protocol with connect mode and bind mode.", link: "https://bitbucket.org/gcdeng/np_project4_0456057/overview"}
      ]}
    ];
    // let projectListL = [
    //   {title:'TenkiBot', tag:'Javascript', desc:"A facebook chatbot for search and regular notice the weather of citys, the data are sourced from CWB.", link:'#', imgSrc:'#'},
    //   {title:'Stock analysis based on borker datasets', tag:'Python/scikit-learn/spark', desc:"Analyze stock and broker datasets by data mining techniques to find out the investment strategy", link:'', imgSrc:'#'},
    //   {title:'Battle City Game with AI agent', tag:'Python', desc:"Design an agent as the player in Battle City Game to move tank and destroy the enemy tanks.", link:"", imgSrc:'#'}
    // ];
    // let projectListR = [
    //   {title:'SafeDrink', tag:'React', desc:"In order to impprove drink safety, we rate for drink according to its ingredient, inspection report, packaging material, users also can comment on each drink. It is a cooperation project created by five people, I'm responsible for frontend development.", link:'https://bitbucket.org/smshen/safedrink/overview', imgSrc:'#'},
    //   {title:'Thesis - AQRA', tag:"Python/RYU/Mininet", desc:"We propose an application-aware QoS routing algorithm (AQRA) for SDN-based IoT networking to guarantee multiple QoS requirements of high-priority IoT applications and to adapt to the current network status for better routing paths.", link:'', imgSrc:'#'},
    //   {title:'NCTU Network Programming', tag:'C', desc:"Unix Programming, Socket Programming, Internet and Distributed Information Systems. Have the following four projects:", link:'', imgSrc:'#', list: ["rsh-like remote access system.", "chat-like system using shared memory and single process.", "remote batch system using CGI, http server and winsock.", "SOCKS server, implement the SOCKS 4 firewall protocol with connect mode and bind mode."]}
    // ];
    return (
      <section className="project" id="project">
        <div className={this.props.expanded? "img-container img-container-l changeBg" : "img-container img-container-l"}></div>
        <Grid>
          <Row>
            <Col className={this.props.expanded? "mobile shrink" : "mobile expand"} xs={12}>
              <a href="#project" onClick={()=>this.props.toggle('project')} className="title">Projects</a>
            </Col>
          </Row>
          <Row>
            <Col className={this.props.expanded? null : "shrink"} xs={12} smOffset={6} sm={6} mdOffset={6} md={6} lgOffset={6} lg={6}>
              <ul className="project-list project-list-r">
                {
                  projectList.map((p, i)=>{
                    return (
                      <ProjectItem link={p.link} imgSrc={p.imgSrc} title={p.title} desc={p.desc} tag={p.tag} list={p.list} key={i}/>
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
