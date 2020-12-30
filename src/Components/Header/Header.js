import React from 'react';
import {  FormControl, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/Icon/Logo.png';
import './Header.css';
const Header = () => {
  return (
    <div>
      <Navbar className="navigation nav-style" >
    <Navbar.Brand href="#home"><img style={{height:'50px',marginLeft: '25px'}} src={logo} alt=""/></Navbar.Brand>
    <Form inline style={{marginLeft: '25px'}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
    
    <Nav className="ml-auto">
      <NavLink to="/home" style={{margin: '25px',fontSize: '20px', color: 'white'}}> Home  </NavLink>
      <NavLink to="/features" style={{margin: '25px',fontSize: '20px', color: 'white'}}> Features  </NavLink>
      <NavLink to="/pricing" style={{margin: '25px',fontSize: '20px', color: 'white'}}> Pricing  </NavLink>
      <Button variant="warning"  style={{margin: '25px'}}>Login</Button>
    </Nav>
  </Navbar>
    </div>
  );
};

export default Header;