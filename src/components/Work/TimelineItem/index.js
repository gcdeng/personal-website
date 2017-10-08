import React, {Component} from 'react';
import './index.css';

class TimelineItem extends Component {
  render(){
    let direction='';
    this.props.order%2===0 ?  direction='direction-r' : direction='direction-l';

    return(
      <li className="timeline-item">
        <div className={direction}>
          <div className="flag-wrapper">
            <span className="flag">{this.props.title}</span>
          </div>
          <div className="time-wrapper">
            <span className="time">{this.props.time}</span>
          </div>
          <div className="desc">{this.props.desc}</div>
        </div>
      </li>
    );
  }
}

export default TimelineItem;
