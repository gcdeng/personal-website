import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Scroll from 'react-scroll';
import './index.css';

let Link = Scroll.Link;

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false,
      scrollY: 0
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () =>{
    this.setState({
      scrollY: window.scrollY,
      hidden: window.scrollY > this.state.scrollY
    })
  }

  render(){
    return (
      <Navbar fixedTop collapseOnSelect className={this.state.hidden? 'hide' : ''}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Eric Deng</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link className="nav-link" to="about" spy={true} smooth="easeInCubic" duration={500}>
                about
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="work" spy={true} smooth="easeInCubic" duration={500}>
                work
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="project" spy={true} smooth="easeInCubic" duration={500}>
                projects
              </Link>
            </NavItem>
            <NavItem className="nav-link" href="/blog">blog</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
