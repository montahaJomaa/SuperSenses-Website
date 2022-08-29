import React from "react";
import description_img from '../images/description_img.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NosValeur from "../NosValeur";
import { LinkContainer } from "react-router-bootstrap";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

import img1 from '../images/18771.png';
import img2 from '../images/Kannan-Future-Customer-Service-AI-Artificial-Intelligence-1200x627-1200x627.png';
import img3 from '../images/Component17–6.png';
import hodhod1 from "../images/Mask Group 10115.png";
import hodhod2 from "../images/senses_IA.png";
import iconMsg from "../images/iconMsg.png";
import port1 from '../images/christina-wocintechchat-com-faEfWCdOKIg-unsplash.png';
import port2 from '../images/scott-graham-5fNmWej4tAA-unsplash.png';
import port3 from '../images/sigmund-Im_cQ6hQo10-unsplash.png';
import { Link } from 'react-router-dom';


function HomeInterface() {

  fontawesome.library.add(faCheckSquare, faCoffee);

  return (
    <div className="bg-img" id="bg_img_header">

      <Navbar bg="transparent" expand="lg" id="navbarTestIcons">
        <Container>
          <Navbar.Brand href="/">
            <div className="bgTestImg"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span> <FontAwesomeIcon icon="bars" color="white" size="lg" /> </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="HomeNav">
              <Nav.Link id='NavText_home' href="/">Accueil</Nav.Link>
              <Nav.Link id='NavText_home' href="#NosValNosSolutions">Nos Solutions</Nav.Link>
              <Nav.Link href="/NosExpertises" id='NavText_home' >
                Nos expertises
              </Nav.Link>
              <Nav.Link href="/Apropos" id='NavText_home' >
                A propos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="Description_supersenses">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="bienvenuto">Bienvenue à</div>
              <div className="big-title">Super Senses</div>
              <p className="bienvenuto-p">Super Senses est une startup Tunisienne dévoilée par une équipe d’ingénieurs
                multidisciplinaires. Notre vision est de créer un outil technologique d’aide à la
                décision capable d’ajouter un 6ieme sens utilisant l’intelligence artificielle.</p>
              <LinkContainer to="/Apropos"><Button className="more-info-btn" variant="outline-dark">Lire tout</Button></LinkContainer>
            </div>
            <div className="col-md-6 align-self-center">
              <div id="description_img">
                <img src={description_img} alt="description_img" className="img-responsive"
                  style={{ width: '100%', maxWidth: '471px' }} />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="part2">

        <div className="container">
          <div className="row">
            <h1 className="text-center" id="title1">Nos valeurs & Engagements</h1>
          </div>
          <div className="row">
            <h2 className="text-center text-sm-left" id="title2">Notre clé de réussite</h2>
          </div>
          <div className="col">
          </div>
        </div>

        <div className="p1 container">
          <p><br></br>Nos engagements et nos valeurs nous définissent.<br></br>Ils sont le moteur de notre développement et la clé de notre réussite.<br></br>
            Nous déposons nos savoir-faire et nos expertises au profit de nos clients.<br></br>
            Nous sommes engagés de digitaliser notre quotidien pour un avenir meilleur.</p>
        </div>


        <div className="container images">
          <div className="row">
            <div className='col-md-4'>
              <div className='our-value-item'>
                <img src={img1} alt="Engagements" className="our-value-image img-responsive"></img>
                <div className='our-value-text-container'>
                  <div className='our-value-text'>Engagements</div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='our-value-item'>
                <img src={img3} alt="Savoir-Faire" className="our-value-image img-responsive"></img>
                <div className='our-value-text-container'>
                  <div className='our-value-text'>Savoir-Faire</div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='our-value-item'>
                <img src={img2} alt="Expertise" className="our-value-image img-responsive"></img>
                <div className='our-value-text-container'>
                  <div className='our-value-text'>Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="solution">
          <div className="container">
            <div className="col">
              <div className="row" id="NosValNosSolutions">
                <h1 className="text-center" id="title1">Nos Solutions</h1>
              </div>
              <div className="row">
                <h2 className="text-center text-sm-left" id="title2">Découvrir nos solutions techniques</h2>
              </div>
            </div>
          </div>
        </div>
        <div className='container solutions-container' >
          <div className='row'>
            <div className='col-md-6'>
              <Link className='link-to-solution' to="/Hodhod">
                <img src={hodhod1} className="solution-img img-responsive" id="hodhod1" alt='Hodhod' />
                <div className='solution-description-container'>
                  <div className='solution-title'>HODHOD</div>
                  <div className='solution-text'>Une application mobile pour la municipalité et les citoyens.</div>
                </div>
                <img src={iconMsg} alt='message' className='solution-icon'></img>
              </Link>
            </div>
            <div className='col-md-6'>
              <Link className='link-to-solution' to="/SensesIA">
                <img src={hodhod2} id="hodhod1" className='solution-img img-responsive' alt='Sensea' />
                <div className='solution-description-container'>
                  <div className='solution-title'>Senses IA</div>
                  <div className='solution-text'>
                    Solution technologique permettant aux industriels la collection des données.
                  </div>
                </div>
                <img src={iconMsg} alt='message' className='solution-icon'></img>
              </Link>
            </div>
          </div>
        </div>

        <div className="expertisets">
          <div className='expertiseBox'>
            <ul>
              <li><h1 className="expertiseBoxItems">Nos expertises</h1></li>
              <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Machine Learning</h5></li>
              <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Internet des Objets</h5></li>
              <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Intelligence Artificielle</h5></li>
              <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Formation technologique</h5></li>
              <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Développement web/mobile</h5></li>
              <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;Conception et layout des cartes électroniques</h5></li>
            </ul>
          </div>
        </div>

        <div className='container portfolio-container'>
          <div className='row'  >
            <h1 className='text-center'>Portfolio </h1>
            <h3 className='text-center'>L'esprit d'équipe est notre clé de réussite</h3><br></br>
            <div className='col-md-4 mt-5 text-center'>
              <img src={port1} alt="portfolio" className="portfolio-img img-responsive" />
            </div>
            <div className='col-md-4 mt-5 text-center'>
              <img src={port2} alt='portfolio' className="portfolio-img img-responsive" />
            </div>
            <div className='col-md-4 mt-5 text-center'>
              <img src={port3} alt='portfolio' className="portfolio-img img-responsive" />
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}

export default HomeInterface;