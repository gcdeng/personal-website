import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './index.css';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false,
      scrollY: 0
    };
  }

  componentDidMount(prevState){
    document.addEventListener('scroll', () => {
      this.setState({
        scrollY: window.scrollY,
        hidden: window.scrollY > this.state.scrollY
      })
    });
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
            <NavItem eventKey={1} href="#about">about</NavItem>
            <NavItem eventKey={2} href="#work">work</NavItem>
            <NavItem eventKey={3} href="#project">projects</NavItem>
            <NavItem eventKey={4} href="/blog">blog</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
