import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import language from '../images/language.png';

import { LinkContainer } from 'react-router-bootstrap'
import logo_supersenses from '../images/logo_supersenses.png';

import ProgressBar from 'react-progressbar-on-scroll';



function NavBarHeader() {
  return (
    <div className="nav-header">
      <Navbar expand="lg"  >
        <Container>

          <Navbar.Brand href="#home"><img src={logo_supersenses} alt="logo_supersenses" className="logo_supersenses" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto" >



              <LinkContainer to="/"><Nav.Link className='Nav_item' id='NavText_other'>Acceuil</Nav.Link></LinkContainer>
              <LinkContainer to="/NosSolution/#devenezParag"><Nav.Link className='Nav_item' id='NavText_other'>
                <Dropdown>
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='Nav_item'>
                    <div className='dpSolution'> Nos solutions</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Solution HodHod</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Solution Senses.IA</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link></LinkContainer>
              <LinkContainer to="/NosExpertises"><Nav.Link className='Nav_item' id='NavText_other'>Notre expertise</Nav.Link></LinkContainer>
              <LinkContainer to="/Apropos"><Nav.Link className='Nav_item' id='NavText_other'>A propos</Nav.Link></LinkContainer>
              <Nav.Link id='selectLangue'>
                <Dropdown>
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic" to="/Nos solutions" className='Nav_item'>
                    <div className='dpSolution'><img src={language} id="languageIcon" />Langue</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Francais</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Arabe</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ProgressBar
        id="ProgressBar"
        color="#25ACDE"
        height={11}
        direction="right"
        position="relative"
        gradient={true}
        gradientColor="#eee"

      />

    </div>
  );
}

export default NavBarHeader;