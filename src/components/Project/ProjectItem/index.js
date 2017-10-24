import React, {Component} from 'react';
import './index.css';

class ProjectItem extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <li className="project-item">
        {/* <a href={this.props.link} target='_blank'>
          <div className="project-img-container">
            <img className="project-img" src={this.props.imgSrc} alt={this.props.title}></img>
          </div>
        </a> */}
        <div className="project-content-container">
          {this.props.link===null?
            <p className="project-title">{this.props.title}</p>
          :
            <a href={this.props.link} className="project-title" target='_blank'>{this.props.title}</a>
          }
          <p className="project-desc">{this.props.desc}</p>
          {this.props.list!==undefined?
            <ol className="projectItem-list">
              {
                this.props.list.map((l, i)=>{
                  if(l.link===null){
                      return <li key={i}>{l.item}</li>
                  } else {
                      return <li key={i}><a href={l.link}>{l.item}</a></li>
                  }
                })
              }
            </ol>
            : ''
          }
          <div className="project-tag">{this.props.tag}</div>
        </div>
      </li>
    );
  }
}

export default ProjectItem;
