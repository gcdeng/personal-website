import React, {Component} from 'react';
import Scroll from 'react-scroll';
import './index.css';

let Link = Scroll.Link;

class MyNavItem extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    let {
      item,
      needRouter
    } = this.props
    if(needRouter){
      return(
        <li className="my-nav-item">
          <a className="my-nav-link" href={`/${item}`}>{item}</a>
        </li>
      );
    } else {
      return(
        <li className="my-nav-item">
          <Link className="my-nav-link" to={item} spy={true} smooth="easeInCubic" duration={500}>
            {item}
          </Link>
        </li>
      );
    }
  }
}

export default MyNavItem;
