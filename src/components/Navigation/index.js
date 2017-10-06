import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './index.css';
class Navigation extends Component {
  render(){
    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Eric Deng</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/about">about</NavItem>
            <NavItem eventKey={2} href="/work">work</NavItem>
            <NavItem eventKey={3} href="/project">project</NavItem>
            <NavItem eventKey={4} href="/blog">blog</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
