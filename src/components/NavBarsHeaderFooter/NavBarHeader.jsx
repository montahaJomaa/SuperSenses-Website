import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo_supersenses from '../images/logo_supersenses.png';
import language from '../images/language.png';

import React from 'react';
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
              <Nav.Link to="/HomeInterface" className='Nav_item' id='NavText_other'>Acceuil</Nav.Link>
              <Nav.Link to="/Nos solutions" className='Nav_item' id='NavText_other'>Nos solutions</Nav.Link>
              <Nav.Link to="/NosExpertises" className='Nav_item' id='NavText_other'>Notre expertise</Nav.Link>
              <Nav.Link to="/Apropos" className='Nav_item' id='NavText_other'>A propos</Nav.Link>
              <Nav.Link id='selectLangue'>
                <img src={language} alt="languageIcon"  id='languageIcon'/>
                <select>
                  <option>Francais</option>
                  <option>Arabe</option>
                </select></Nav.Link>
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