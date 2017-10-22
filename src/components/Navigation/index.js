import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import MyNavItem from './MyNavItem';
import './index.css';

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

  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY,
      hidden: window.scrollY > this.state.scrollY
    })
  }

  handleToggle = () => {
    // if(this.state.hidden && this.props.expended)
  }

  render(){
    return (
      <Navbar fixedTop className={this.state.hidden? 'hide' : ''} onToggle={this.handleToggle}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Eric Deng</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <MyNavItem {...this.props} item="about" needRouter={false} />
            <MyNavItem {...this.props} item="work" needRouter={false} />
            <MyNavItem {...this.props} item="project" needRouter={false} />
            <MyNavItem {...this.props} item="blog" needRouter={true} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
