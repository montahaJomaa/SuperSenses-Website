import React from "react";

import description_img from '../images/description_img.png';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

import smartLogger from '../images/smartLogger.png';
import novationCity from '../images/novationCity.png';



import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo_supersenses from '../images/logo_supersenses.png';



function HomeInterface() {

  return (
    <div className="bg-img" id="bg_img_header">

      <Navbar bg="transparent" expand="lg" >
        <Container>
          <Navbar.Brand href="#home"><img src={logo_supersenses} alt="logo_supersenses" className="logo_supersenses" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto" >
              <Nav.Link to="/Home" className='Nav_itemHomeInterface' id='NavText'>Acceuil</Nav.Link>
              <Nav.Link to="/Nos solutions" className='Nav_itemHomeInterface' id='NavText'>Nos solutions</Nav.Link>
              <Nav.Link to="/NosServices" className='Nav_itemHomeInterface' id='NavText'>Notre expertise</Nav.Link>
              <Nav.Link to="/Apropos" className='Nav_itemHomeInterface' id='NavText'>A propos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="Description_supersenses">
        <Row>
          <Col>
            <h2>Bienvenue à</h2>
            <h1>Super Senses</h1>
            <p>Super Senses est une startup Tunisienne dévoilée par une <br />équipe d’ingénieurs
              multidisciplinaires. Notre vision est de <br />crée un outil technologique d’aide à la
              décision capable<br /> d’ajouter un 6ieme sens utilisant l’intelligence artificielle.</p>
            <Button variant="outline-dark">Lire tout</Button>
          </Col>
          <Col>
            <div id="description_img">
              <img src={description_img} alt="description_img" className="description_img" />
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default HomeInterface