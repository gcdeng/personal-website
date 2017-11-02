import React, {Component} from 'react';
import { Fade } from 'react-reveal';
import './index.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

class TimelineItem extends Component {
  render(){
    return(
      <li className="timeline-item">
        <div className="direction-l">
          {
            this.props.time==='' ?
              <div className="flag-wrapper work-header">
                <span className="flag">
                  {this.props.title}
                </span>
              </div>
            :
              <div>
                <div className="flag-wrapper">
                  <a className="flag-link" href={this.props.link} target='_blank'>
                    <span className="flag">
                      <ParallaxProvider>
                        <Parallax
                          className="logo"
                          offsetYMax={35}
                          offsetYMin={-40}
                          slowerScrollRate={true}
                          tag="figure"
                        >
                          <img className="logo-img" src={this.props.logo} alt='work logo'/>
                        </Parallax>
                      </ParallaxProvider>
                      <Fade>
                        {this.props.title}
                      </Fade>
                    </span>
                  </a>
                </div>
                <Fade>
                <div className="time-wrapper">
                  <span className="time">{this.props.time}</span>
                </div>
                <div className="desc">{this.props.desc}</div>
                </Fade>
              </div>
            }
        </div>
      </li>
    );
  }
}

export default TimelineItem;
