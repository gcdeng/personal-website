import React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import './index.css';
import TimelineItem from './TimelineItem';

class Work extends Component {
  render(){
    let works=[
      {title: 'QNAP', time: '2017/12 - present', desc: 'Frontend Developer'},
      {title: 'National Chiao Tung University (NCTU)', time: '2015/09/14 - 2017/09/04', desc: 'Institute of Computer Science and Engineering'}
    ]
    return(
      <section className="work">
        <Grid>
          <Row>
            <ul className="timeline">
              {
                works.map((w, i)=>{
                  return(
                    <TimelineItem title={w.title} time={w.time} desc={w.desc} order={i} key={i}/>
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
