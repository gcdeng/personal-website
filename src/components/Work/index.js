import React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import './index.css';
import TimelineItem from './TimelineItem';
import qnap_logo from '../img/work/qnap_logo.png';
import nctu_logo from '../img/work/nctu_logo.png';
import ntust_logo from '../img/work/ntust_logo.png';

class Work extends Component {
  render(){
    let works=[
      // {title: 'Work', time: '', desc: '', logo: '', link: ''},
      {title: 'QNAP', time: '2017/12 - present', desc: 'Frontend Developer', logo: qnap_logo, link: 'https://www.qnap.com/zh-tw/'},
      {title: 'National Chiao Tung University (NCTU)', time: '2015/09/14 - 2017/09/04', desc: 'Institute of Computer Science and Engineering', logo: nctu_logo, link: 'http://www.nctu.edu.tw/'},
      {title: 'National Taiwan University of Science and Technology (NTUST)', time: '2011/09 - 2015/07', desc: 'Department of Electronic and Computer Engineering', logo: ntust_logo, 'link': 'http://www.ntust.edu.tw/home.php'}
    ];
    return(
      <section className="work" id='work'>
        <div className="img-container img-container-r"></div>
        <Grid>
          <Row>
            <ul className="timeline">
              {
                works.map((w, i)=>{
                  return(
                    <TimelineItem title={w.title} time={w.time} desc={w.desc} logo={w.logo} link={w.link} order={i} key={i}/>
                  );
                })
              }
            </ul>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Work;
