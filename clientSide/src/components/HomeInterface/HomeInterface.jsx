import React from "react";
import description_img from '../images/description_img.png';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_supersenses from '../images/logo_supersenses.png';
import NosValeur from "../NosValeur";
import { LinkContainer } from "react-router-bootstrap";
import language from '../images/language.png';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { HashLink } from 'react-router-hash-link';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

function HomeInterface() {

  fontawesome.library.add(faCheckSquare, faCoffee);

  return (
    <div className="bg-img" id="bg_img_header">

      <Navbar bg="transparent" expand="lg" id="navbarTestIcons">
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={logo_supersenses} alt="logo_supersenses" className="logo_supersenses" /> */}
            <div className="bgTestImg"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span>
              <FontAwesomeIcon
                icon="bars" color="white" size="10px" />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto" id="HomeNav">
              <LinkContainer to="/"><Nav.Link className='Nav_home' id='NavText_home'><h6>Acceuil</h6></Nav.Link></LinkContainer>
              <Nav.Link className='Nav_home' id='NavText_home'>
                <div className="btnNosSolutionHome">
                  <Dropdown as={ButtonGroup} id="dropdown_Solution">
                    {/* <Button href="/#boxs" variant="transparent" id='NavText_home'>NOS SOLUTIONS</Button> */}
                    <Button variant='transparent'>
                      <HashLink className="hashLinkNavBar" smooth to="/#boxs"><h6>NOS SOLUTIONS</h6></HashLink>
                    </Button>
                    <Dropdown.Toggle split variant="transparent" size="sm" id="dropdown-split-basic" />
                    <Dropdown.Menu size="sm">
                      <Dropdown.Item href="/Hodhod">
                        <HashLink className="hashLinkNavBarDropDown" to="/Hodhod"><h6>Hodhod</h6></HashLink>
                      </Dropdown.Item>
                      <Dropdown.Item href="/SensesIA">
                        <HashLink className="hashLinkNavBarDropDown" to="/SensesIA"><h6>SensesIA</h6></HashLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Nav.Link>
              <LinkContainer to="/NosExpertises"><Nav.Link className='Nav_home' id='NavText_home'><h6>Notre expertise</h6></Nav.Link></LinkContainer>
              <LinkContainer to="/Apropos"><Nav.Link className='Nav_item' id='NavText_home'><h6>A propos</h6></Nav.Link></LinkContainer>
              {/* <Nav.Link id='selectLangue'>
                <Dropdown>
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic" to="/Nos solutions" className='Nav_item'>
                    <div className='dpSolution'><img src={language} id="languageIcon" />Langue</div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Francais</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Arabe</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="Description_supersenses">
        <Container>
          <Row>
            <Col>
              <h2>Bienvenue à</h2>
              <h1>Super Senses</h1>
              <p>Super Senses est une startup Tunisienne dévoilée par une <br />équipe d’ingénieurs
                multidisciplinaires. Notre vision est de <br />crée un outil technologique d’aide à la
                décision capable<br /> d’ajouter un 6ieme sens utilisant l’intelligence artificielle.</p>
              <LinkContainer to="/Apropos"><Button variant="outline-dark">Lire tout</Button></LinkContainer>
            </Col>
            <Col>
              <div id="description_img">
                <img src={description_img} alt="description_img" className="description_img" />
              </div>
            </Col>
          </Row>
        </Container>

        <NosValeur />
      </div>

    </div>
  );
}

export default HomeInterface