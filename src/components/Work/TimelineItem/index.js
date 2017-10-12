import React, {Component} from 'react';
import './index.css';

class TimelineItem extends Component {
  render(){
    let direction='';
    this.props.order%2===0 ?  direction='direction-r' : direction='direction-l';

    return(
      <li className="timeline-item">
        <div className={direction}>
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
                      <img className="logo" src={this.props.logo} alt='work logo'/>
                      {this.props.title}
                    </span>
                  </a>
                </div>
                <div className="time-wrapper">
                  <span className="time">{this.props.time}</span>
                </div>
                <div className="desc">{this.props.desc}</div>
              </div>
            }
        </div>
      </li>
    );
  }
}

export default TimelineItem;
