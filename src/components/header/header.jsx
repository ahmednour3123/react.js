import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
 export default function Header(props) {
 

    return (
        <>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/movies">movies</NavLink>
            <NavLink to="/favorites">favorites</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
