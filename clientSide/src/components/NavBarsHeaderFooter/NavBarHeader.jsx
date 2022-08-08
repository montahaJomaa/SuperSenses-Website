import React, { Link } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import language from '../images/language.png';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap';
import logo_supersenses from '../images/logo_supersenses.png';

import ProgressBar from 'react-progressbar-on-scroll';
import { HashLink } from 'react-router-hash-link';



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

              <Dropdown as={ButtonGroup}>
                {/* <Button href="/#boxs" variant="transparent">NOS SOLUTIONS</Button> */}
                <Button variant='transparent'><HashLink smooth to="/#boxs">NOS SOLUTIONS</HashLink></Button>

                <Dropdown.Toggle split variant="transparent" size="sm" id="dropdown-split-basic" />
                <Dropdown.Menu size="sm">
                  <Dropdown.Item href="/Hodhod">Hodhod</Dropdown.Item>
                  <Dropdown.Item href="/SensesIA">SensesIA</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

              <LinkContainer to="/NosExpertises"><Nav.Link className='Nav_item' id='NavText_other'>Notre expertise</Nav.Link></LinkContainer>
              <LinkContainer to="/Apropos"><Nav.Link className='Nav_item' id='NavText_other'>A propos</Nav.Link></LinkContainer>
              {/* <div className='dpSolution'><img src={language} id="languageIcon" /></div> */}
              {/* <Nav.Link id='selectLangue'>

                <Dropdown as={ButtonGroup}>

                  <Button href="/" variant="transparent">LANGUE</Button>

                  <Dropdown.Toggle split variant="transparent" size="sm" id="dropdown-split-basic" />
                  <Dropdown.Menu size="sm">
                    <Dropdown.Item href="/Hodhod">Francais</Dropdown.Item>
                    <Dropdown.Item href="/SensesIA">Arabe</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link> */}

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