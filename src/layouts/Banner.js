import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Banner = () => {
    return(
      <>
        <Navbar sticky="top" bg="light" varient="dark" expand="md">
        <Container>
          <Navbar.Brand href="/"><img src="img/임시.png" alt="logo" width={50}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
      
            <NavDropdown title="Introduce" id="basic-nav-dropdown">
                <NavDropdown.Item href="/family">Family</NavDropdown.Item>
                <NavDropdown.Item href="/study">Study</NavDropdown.Item>
                <NavDropdown.Item href="/dream">Dream</NavDropdown.Item>
              </NavDropdown>
      

              <NavDropdown title="Hobby" id="basic-nav-dropdown">
                <NavDropdown.Item href="/drawing">Drawing</NavDropdown.Item>
                <NavDropdown.Item href="/game">Playing Game</NavDropdown.Item>
                <NavDropdown.Item href="/guitar">Playing Guitar</NavDropdown.Item>
                <NavDropdown.Item href="/watching">Watching K-drama</NavDropdown.Item>                
              </NavDropdown>
      

              <NavDropdown title="Like" id="basic-nav-dropdown">
                <NavDropdown.Item href="/animal">Animal</NavDropdown.Item>
                <NavDropdown.Item href="/food">Food</NavDropdown.Item>
                <NavDropdown.Item href="/music">Music</NavDropdown.Item>               
              </NavDropdown>
              

              <NavDropdown title="Dislike" id="basic-nav-dropdown">
                <NavDropdown.Item href="/dislike">Dislike</NavDropdown.Item>
              </NavDropdown>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
      );
};

export default Banner;