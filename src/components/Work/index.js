import React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import './index.css';

class Work extends Component {
  render(){
    return(
      <section className="work">
        <Grid>
          <Row>
            <ul className="timeline">
              <li className="timeline-item">
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
              <li className="timeline-item">
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
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Work;
