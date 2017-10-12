import React, {Component} from 'react';
import './index.css';

class ProjectItem extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <li className="project-item">
        <a href={this.props.link} target='_blank'>
          <div className="project-img-container">
            <img className="project-img" src={this.props.imgSrc} alt={this.props.title}></img>
          </div>
        </a>
        <a href={this.props.link} className="project-title" target='_blank'>{this.props.title}</a>
        <p className="project-desc">{this.props.desc}</p>
        <div className="project-tag">{this.props.tag}</div>
      </li>
    );
  }
}

export default ProjectItem;
