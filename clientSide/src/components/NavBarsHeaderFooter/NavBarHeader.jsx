import React from 'react';
import { Link, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
//import language from '../images/language.png';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap';
import logo_supersenses from '../images/logo_supersenses.png';

import ProgressBar from 'react-progressbar-on-scroll';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBarHeader() {

  const isMobile = useMediaQuery({ maxWidth: 428 })

  const [show, setShow] = useState(false)

  const controlNavbar = () => {
    if (window.innerWidth < 768) {
      setShow(false)


    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <div className={`${show && 'nav-header'}`}>
      <Navbar bg="transparent" expand="lg" id="navbarTestIcons">
        <Container>
          <Navbar.Brand href="/">
            <div className="bgTestImg"></div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span>
              <FontAwesomeIcon icon="bars" color="black" size="lg" />
            </span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="HomeNav">
              <Nav.Link className='Nav_home' id='NavText_home' href="/" style={{ color: 'black' }}>Accueil</Nav.Link>
              
              <NavDropdown title="NOS SOLUTIONS" id="dropdown_Solution" style={{ color: 'black' }}>
                <NavDropdown.Item href="/Hodhod">Hodhod</NavDropdown.Item>
                <NavDropdown.Item href="/SensesIA">SensesIA</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="/NosExpertises" className='Nav_home' id='NavText_home' style={{ color: 'black' }}>
                Nos expertises
              </Nav.Link>
              
              <Nav.Link href="/Apropos" className='Nav_home' id='NavText_home' style={{ color: 'black' }}>
                A propos
              </Nav.Link>
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
      {/* <ProgressBar
        id="ProgressBar"
        color={isMobile ? 'transparent' : '#25ACDE'}
        height={11}
        direction="right"
        position="relative"
        gradient={true}
        gradientColor={isMobile ? 'transparent' : '#eee'}
      /> */}
    </div>
  );
}

export default NavBarHeader;