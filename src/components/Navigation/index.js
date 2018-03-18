import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import Scroll from 'react-scroll';
import './index.css';

let Link = Scroll.Link;

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false,
      scrollY: 0,
      menuExpanded: false
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    // window.onscroll = () => {
    //   if(this.state.menuExpanded){
    //     this.setState({
    //       menuExpanded: false
    //     })
    //   }
    // }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY,
      hidden: window.scrollY > this.state.scrollY
    });
    if(this.state.menuExpanded){
      this.setState({
        menuExpanded: false
      });
    }
  }


  handleOnClick = () => {
    if(!this.state.menuExpanded){
      this.setState({
        menuExpanded: true
      })
    } else {
      this.setState({
        menuExpanded: false
      })
    };
  }


  render(){
    let navClass="";
    if(this.state.hidden) navClass="hide";
    if(this.state.menuExpanded) navClass="expanded";
    return (
      <div>
        <nav className={navClass}>
          <Grid>
            <Row>
              <div className="nav-header">
                <a className="nav-brand" href="/personal-website">EricDeng</a>
                <button className="nav-toggle" onClick={this.handleOnClick}>
                  <span className={this.state.menuExpanded? "icon-bar bar-1" : "icon-bar"}></span>
                  <span className={this.state.menuExpanded? "icon-bar bar-2" : "icon-bar"}></span>
                </button>
              </div>
              <div className={this.state.menuExpanded? "nav-collapse in": "nav-collapse"}>
                <ul className="nav-list">
                  <li className="nav-item">
                    <Link className="nav-link" to="about" spy={true} smooth="easeInCubic" duration={500} offset={-150} onClick={this.handleOnClick}>
                      about
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="work" spy={true} smooth="easeInCubic" duration={500} onClick={this.handleOnClick}>
                      work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="project" spy={true} smooth="easeInCubic" duration={500} onClick={this.handleOnClick}>
                      projects
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="https://gcdeng.github.io/" target="_blank" rel="noopener noreferrer">
                      blog
                    </a>
                  </li> */}
                </ul>
              </div>
            </Row>
          </Grid>
        </nav>
        <div className={this.state.menuExpanded? "menu-curtain menu-curtain-expanded" : "menu-curtain"} onClick={this.handleOnClick}></div>
      </div>
    );
  }
}

export default Navigation;
